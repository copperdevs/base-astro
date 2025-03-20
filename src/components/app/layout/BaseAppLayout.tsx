import {
  AppearanceColors,
  AccentColors,
  GrayColors,
  type PageProps,
} from "@/lib";
import { Theme as RadixTheme } from "@radix-ui/themes";
import type { ReactNode } from "react";

export function BaseAppLayout({
  props,
  children,
}: {
  props: PageProps;
  children?: ReactNode;
}) {
  return (
    <RadixTheme
      accentColor={AccentColors.Jade}
      grayColor={GrayColors.Slate}
      radius="large"
      appearance={AppearanceColors.Dark}
    >
      {children}
    </RadixTheme>
  );
}
