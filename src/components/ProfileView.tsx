import { useState } from "react";
import { Phone, Mail, Globe, Linkedin, Instagram, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WindsongMark } from "@/components/WindsongMark";
import type { Profile } from "@/data/profiles";
import { downloadVCard } from "@/lib/vcard";

const WINDSONG_URL = "https://www.windsongtravel.com.au/";

function ActionLink({
  href,
  label,
  icon: Icon,
  external,
}: {
  href: string;
  label: string;
  icon: typeof Phone;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="flex flex-1 flex-col items-center gap-2 rounded-md border border-border/70 bg-card px-3 py-4 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:border-gold/60 hover:text-brand active:scale-[0.985]"
    >
      <Icon className="h-4 w-4 stroke-[1.25] text-brand/80" aria-hidden />
      {label}
    </a>
  );
}

export function ProfileView({ profile }: { profile: Profile }) {
  const [saveState, setSaveState] = useState<"idle" | "saved" | "failed">("idle");
  const fullName = `${profile.first_name} ${profile.last_name}`.trim();

  const handleSave = async () => {
    const ok = await downloadVCard(profile);
    setSaveState(ok ? "saved" : "failed");
  };

  return (
    <main className="mx-auto w-full max-w-[27rem] px-6 pb-16 pt-10 sm:pt-16">
      <Reveal className="flex justify-center rounded-md bg-logo px-5 py-3">
        <WindsongMark />
      </Reveal>

      <div className="mt-10 flex flex-col items-center text-center">
        <div className="animate-[none] overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-1.5 shadow-[0_18px_40px_-32px_oklch(0.235_0.021_235/0.5)]">
          <img
            src={profile.profile_photo}
            alt={`${fullName}, ${profile.job_title} at ${profile.company}`}
            width={800}
            height={1008}
            className="h-40 w-40 rounded-[1.4rem] object-cover object-[78%_center] sm:h-44 sm:w-44"
          />
        </div>

        <h1 className="mt-7 font-display text-[2.1rem] leading-tight tracking-[0.06em] text-ink sm:text-[2.4rem]">
          {profile.first_name.toUpperCase()} {profile.last_name.toUpperCase()}
        </h1>
        <p className="mt-2 text-[0.68rem] uppercase tracking-[0.34em] text-muted-foreground">
          {profile.job_title}
        </p>
        <p className="mt-1.5 text-[0.68rem] uppercase tracking-[0.34em] text-brand/80">
          {profile.company}
        </p>

        {profile.tagline ? (
          <>
            <span className="rule mt-7" aria-hidden />
            <p className="mt-6 font-display text-[1.28rem] italic leading-relaxed text-ink/80">
              &ldquo;{profile.tagline}&rdquo;
            </p>
          </>
        ) : null}
      </div>

      {profile.vcard_enabled ? (
        <div className="mt-9">
          <button
            type="button"
            onClick={handleSave}
            className="flex w-full items-center justify-center gap-3 rounded-md bg-brand px-6 py-5 text-[0.72rem] uppercase tracking-[0.32em] text-brand-foreground transition-all duration-300 hover:bg-brand/92 active:scale-[0.99]"
          >
            {saveState === "saved" ? (
              <Check className="h-4 w-4 stroke-[1.5]" aria-hidden />
            ) : null}
            Save Contact
          </button>
          {saveState === "saved" ? (
            <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-muted-foreground">
              Contact card downloaded — open it to add {profile.first_name} to your
              contacts.
            </p>
          ) : null}
          {saveState === "failed" ? (
            <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-muted-foreground">
              Your browser blocked the download. Use the buttons below, or save{" "}
              {profile.phone ? <span className="text-ink">{profile.phone}</span> : null}
              {profile.phone && profile.email ? " · " : null}
              {profile.email ? <span className="text-ink">{profile.email}</span> : null}{" "}
              manually.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-4 flex gap-3">
        {profile.phone ? (
          <ActionLink
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            label="Call"
            icon={Phone}
          />
        ) : null}
        {profile.email ? (
          <ActionLink href={`mailto:${profile.email}`} label="Email" icon={Mail} />
        ) : null}
        {profile.website ? (
          <ActionLink href={profile.website} label="Website" icon={Globe} external />
        ) : null}
      </div>

      {profile.biography ? (
        <Reveal className="mt-20 border-t border-border/60 pt-14" as="section">
          <h2 className="text-[0.62rem] uppercase tracking-[0.42em] text-muted-foreground">
            About James
          </h2>
          <span className="rule mt-4 block" aria-hidden />
          <p className="mt-5 text-[0.95rem] leading-[1.85] text-ink/80">
            {profile.biography}
          </p>
        </Reveal>
      ) : null}

      {profile.specialties?.length ? (
        <Reveal className="mt-12" as="section">
          <h2 className="text-[0.62rem] uppercase tracking-[0.42em] text-muted-foreground">
            Specialist In
          </h2>
          <span className="rule mt-4 block" aria-hidden />
          <p className="mt-5 text-[0.9rem] leading-[1.9] text-ink/75">
            {profile.specialties.join(" · ")}
          </p>
        </Reveal>
      ) : null}

      {profile.experience_years ? (
        <Reveal className="my-14 border-y border-border/60 py-10 text-center" as="section">
          <p className="font-display text-6xl leading-none text-brand">{profile.experience_years}</p>
          <p className="mt-3 text-[0.6rem] uppercase tracking-[0.36em] text-muted-foreground">
            Years of travel experience
          </p>
        </Reveal>
      ) : null}

      {profile.travel_tip ? (
        <Reveal as="section">
          <h2 className="text-[0.62rem] uppercase tracking-[0.42em] text-muted-foreground">
            James&rsquo; Travel Tip
          </h2>
          <span className="rule mt-4 block" aria-hidden />
          <blockquote className="mt-5 font-display text-[1.3rem] italic leading-relaxed text-ink/80">
            &ldquo;{profile.travel_tip}&rdquo;
          </blockquote>
        </Reveal>
      ) : null}

      {profile.interests?.length ? (
        <Reveal className="mt-12" as="section">
          <h2 className="text-[0.62rem] uppercase tracking-[0.42em] text-muted-foreground">
            Beyond Travel
          </h2>
          <p className="mt-4 text-[0.86rem] leading-relaxed text-ink/70">
            {profile.interests.join(" · ")}
          </p>
        </Reveal>
      ) : null}

      {profile.linkedin || profile.instagram ? (
        <Reveal className="mt-14 flex justify-center gap-4">
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-full border border-border/70 p-3 text-brand/80 transition-colors hover:border-gold/60 hover:text-brand"
            >
              <Linkedin className="h-4 w-4 stroke-[1.25]" aria-hidden />
            </a>
          ) : null}
          {profile.instagram ? (
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="rounded-full border border-border/70 p-3 text-brand/80 transition-colors hover:border-gold/60 hover:text-brand"
            >
              <Instagram className="h-4 w-4 stroke-[1.25]" aria-hidden />
            </a>
          ) : null}
        </Reveal>
      ) : null}

      <Reveal className="mt-14 text-center" as="section">
        <p className="text-[0.56rem] uppercase tracking-[0.38em] text-muted-foreground">
          Explore Windsong
        </p>
        <a
          href={WINDSONG_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-flex items-center font-display text-lg text-brand transition-colors hover:text-gold"
        >
          Visit Windsong Travel <span aria-hidden>&nbsp;→</span>
        </a>
      </Reveal>

      <footer className="mt-16 border-t border-border/60 pt-6 text-center">
        <p className="text-[0.55rem] uppercase tracking-[0.32em] text-muted-foreground/60">
          Powered by TAPP
        </p>
      </footer>
    </main>
  );
}
