import { Theme as RadixTheme } from "@radix-ui/themes";
import type { ReactNode } from "react";
import type { PageProps } from "@/lib";

export function BaseAppLayout({
	props,
	children,
}: {
	props: PageProps;
	children?: ReactNode;
}) {
	return (
		<RadixTheme
			accentColor={props.appInfo.accentColor}
			appearance={props.appInfo.appearanceColor}
			grayColor={props.appInfo.grayColor}
			radius="large"
		>
			{children}
		</RadixTheme>
	);
}
