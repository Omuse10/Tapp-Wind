import jamesPortrait from "@/assets/james-profile.jpg.asset.json";

export type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  job_title: string;
  company: string;
  profile_photo: string;
  tagline?: string;
  phone?: string;
  email?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
  biography?: string;
  address?: string;
  vcard_enabled: boolean;
  profile_slug: string;
  services?: string[];
  experience_years?: string;
  specialties?: string[];
  interests?: string[];
  travel_tip?: string;
};

export const profiles: Profile[] = [
  {
    id: "1",
    first_name: "James",
    last_name: "",
    job_title: "Owner Manager",
    company: "Windsong Travel",
    profile_photo: jamesPortrait.url,
    tagline: "Creating journeys worth remembering.",
    website: "https://www.windsongtravel.com.au/",
    biography:
      "James is the Owner Manager of Windsong Travel and brings more than 35 years of travel experience to the business. With a passion for discovering new places and experiencing different cultures, he has escorted travellers across the world and feels privileged to have shared countless trips of a lifetime with his clients.",
    vcard_enabled: true,
    profile_slug: "james",
    experience_years: "35+",
    specialties: ["Africa", "Canada & Alaska", "Mexico", "Antarctica", "Vietnam"],
    interests: ["Family", "Drumming", "Fly Fishing", "Golf"],
    travel_tip: "Keep an open mind… nothing is better or worse, just different!",
  },
];

export const defaultProfileSlug = "james";

export function getProfile(slug: string): Profile | undefined {
  return profiles.find((p) => p.profile_slug === slug.toLowerCase());
}
