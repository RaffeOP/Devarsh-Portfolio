"use server";

import { siteConfig } from "@/config/site";

export async function getGitHubStatsServerAction() {
  const fallbackData = {
    name: siteConfig.author,
    bio: siteConfig.description,
    avatar_url: "/avatar.png",
    company: siteConfig.status,
    public_repos: "8+",
    followers: siteConfig.followers,
    following: "50+",
    location: `${siteConfig.location.current} | ${siteConfig.location.permanent}`,
    hireable: siteConfig.hireable,
  };

  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.links.githubUsername}`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      return fallbackData;
    }

    const data = await response.json();
    return {
      name: data.name || fallbackData.name,
      bio: data.bio || fallbackData.bio,
      avatar_url: data.avatar_url || fallbackData.avatar_url,
      company: siteConfig.status, // Override with requested "Student"
      public_repos: data.public_repos,
      followers: data.followers > 100 ? data.followers : fallbackData.followers,
      following: data.following,
      location: `${siteConfig.location.current} | ${siteConfig.location.permanent}`,
      hireable: siteConfig.hireable, // Override with requested "Yes"
    };
  } catch (error) {
    return fallbackData;
  }
}
