import { createFileRoute } from "@tanstack/react-router";
import { ProfileView } from "@/components/ProfileView";
import { getProfile, defaultProfileSlug } from "@/data/profiles";

const profile = getProfile(defaultProfileSlug) ?? (() => {
  throw new Error("Default Windsong profile is unavailable");
})();
const fullName = `${profile.first_name} ${profile.last_name}`;
const title = `${fullName} — ${profile.job_title}, Windsong Travel`;
const description = `Save ${profile.first_name}'s contact details in one tap. ${profile.job_title} at Windsong Travel, creating personalised journeys worth remembering.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <ProfileView profile={profile} />;
}
