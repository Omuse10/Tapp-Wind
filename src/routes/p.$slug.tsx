import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProfileView } from "@/components/ProfileView";
import { getProfile } from "@/data/profiles";

export const Route = createFileRoute("/p/$slug")({
  loader: ({ params }) => {
    const profile = getProfile(params.slug);
    if (!profile) throw notFound();
    return { profile };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Profile unavailable — Windsong Travel" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { profile } = loaderData;
    const title = `${profile.first_name} ${profile.last_name} — ${profile.job_title}, ${profile.company}`;
    const description = `Save ${profile.first_name}'s contact details in one tap. ${profile.job_title} at ${profile.company}, creating personalised journeys worth remembering.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProfileNotFound,
  component: ProfilePage,
});

function ProfilePage() {
  const { profile } = Route.useLoaderData();
  return <ProfileView profile={profile} />;
}

function ProfileNotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[27rem] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-[1.8rem] tracking-[0.06em] text-ink">
        Profile not found
      </h1>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
        This Windsong Travel card isn&rsquo;t active yet.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex items-center justify-center rounded-md border border-brand/35 px-6 py-4 text-[0.66rem] uppercase tracking-[0.3em] text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
      >
        Windsong Travel
      </Link>
    </main>
  );
}
