import type { Profile } from "@/data/profiles";

/** RFC 2426 line folding: max 75 octets per line, continuations start with a space. */
const fold = (line: string): string => {
  if (line.length <= 75) return line;
  const parts: string[] = [line.slice(0, 75)];
  for (let i = 75; i < line.length; i += 74) parts.push(line.slice(i, i + 74));
  return parts.join("\r\n ");
};


export function buildVCard(profile: Profile, photoBase64?: string): string {
  const lines: string[] = ["BEGIN:VCARD", "VERSION:3.0"];

  lines.push(`N:${profile.last_name};${profile.first_name};;;`);
  lines.push(`FN:${profile.first_name} ${profile.last_name}`);
  if (profile.job_title) lines.push(`TITLE:${profile.job_title}`);
  if (profile.company) lines.push(`ORG:${profile.company}`);
  if (profile.phone) lines.push(`TEL;TYPE=CELL,VOICE:${profile.phone}`);
  if (profile.email) lines.push(`EMAIL;TYPE=INTERNET,WORK:${profile.email}`);
  if (profile.website) lines.push(`URL:${profile.website}`);
  if (profile.address) lines.push(`ADR;TYPE=WORK:;;${profile.address};;;;`);
  if (profile.linkedin)
    lines.push(`X-SOCIALPROFILE;TYPE=linkedin:${profile.linkedin}`);
  if (profile.instagram)
    lines.push(`X-SOCIALPROFILE;TYPE=instagram:${profile.instagram}`);
  if (photoBase64) lines.push(`PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}`);
  lines.push(`NOTE:${profile.tagline ?? ""}`);
  lines.push(`REV:${new Date().toISOString()}`);
  lines.push("END:VCARD");

  return lines.map(fold).join("\r\n");
}

export function vCardFileName(profile: Profile): string {
  return [profile.first_name, profile.last_name, profile.company]
    .filter(Boolean)
    .join("-")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "") + ".vcf";
}

async function fetchPhotoBase64(url: string): Promise<string | undefined> {
  try {
    const res = await fetch(url);
    if (!res.ok) return undefined;
    const blob = await res.blob();
    if (blob.size > 400_000) return undefined;
    const buf = new Uint8Array(await blob.arrayBuffer());
    let binary = "";
    for (let i = 0; i < buf.length; i += 1) binary += String.fromCharCode(buf[i]!);
    return btoa(binary);
  } catch {
    return undefined;
  }
}

/** Returns true when the download was triggered, false when the browser blocked it. */
export async function downloadVCard(profile: Profile): Promise<boolean> {
  try {
    const photo = await fetchPhotoBase64(profile.profile_photo);
    const vcard = buildVCard(profile, photo);
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = vCardFileName(profile);
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    return true;
  } catch {
    return false;
  }
}
