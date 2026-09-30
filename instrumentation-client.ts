import posthog from "posthog-js";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (token) {
  posthog.init(token, {
    api_host: "/phx",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-05-30",
    person_profiles: "identified_only"
  });
}
