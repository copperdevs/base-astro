import type { AccentColors, AppearanceColors, GrayColors } from "@/lib";

export type PageProps = {
  pageInfo: PageInfo;
  appInfo: AppInfo;
};

export type PageInfo = {
  title: string;
  description: string;
};

export type AppInfo = {
  title?: string;
  accentColor: AccentColors;
  grayColor: GrayColors;
  appearanceColor: AppearanceColors;
};
