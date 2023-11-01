// Importing env files here to validate on build
await import("./src/env.mjs");
// import "@acme/auth/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/db", "@acme/auth", "@acme/api", "@acme/ui"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    serverComponentsExternalPackages: [
      "@zenstackhq/runtime",
      "@zenstackhq/server",
    ],
  },
};

export default config;
