import { type AppInfo, type SiteInfo } from "@/lib";

export const appInfo: AppInfo = {
  accentColor: "jade",
  grayColor: "slate",
  appearanceColor: "dark",
};

export const siteInfo: SiteInfo = {
  title: "base-astro",
  license: "MIT",
  keywords: ["testing", "astro"],
  robots: "none",
  locale: "en_US",
  twitter: {
    card: "summary_large_image",
    siteUsername: "@copperdevs",
  },
  author: {
    name: "copper",
    twitterUsername: "@copperdevs",
  },
  siteUrl: "https://copperdevs.com",
};
