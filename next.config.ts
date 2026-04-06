import type { NextConfig } from "next";

const manifestHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
];
 
const isGithubActions = !!process.env.GITHUB_ACTIONS;

const nextConfig: NextConfig = {
  ...(isGithubActions ? { output: "export" as const } : {}),
  images: {
    unoptimized: isGithubActions,
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      {
        protocol: "https",
        hostname: "**.ufs.sh",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/devarsh-patel-7389b0321/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [{ source: "/site.webmanifest", headers: manifestHeaders }];
  },
};

export default nextConfig;
