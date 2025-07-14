import { Theme as RadixTheme } from "@radix-ui/themes";
import { type ReactNode, useEffect, useState } from "react";
import { Toaster } from "sonner";
import type { PageProps } from "@/lib";

export function BaseAppLayout({
	props,
	children,
}: {
	props: PageProps;
	children?: ReactNode;
}) {
	const [appearance, setAppearance] = useState<"dark" | "light">("dark");

	// biome-ignore lint/correctness/useExhaustiveDependencies: toggleAppearance changes on every re-render and should not be used as a hook dependency.
	useEffect(() => {
		if (props.appInfo.appearanceColor === "system") {
			toggleAppearance();
		} else {
			setAppearance(props.appInfo.appearanceColor);
		}

		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (_e) => {
				toggleAppearance();
			});
	}, [props.appInfo.appearanceColor]);

	function toggleAppearance() {
		if (props.appInfo.appearanceColor !== "system") {
			return;
		}

		if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
			setAppearance("dark");
		} else {
			setAppearance("light");
		}
	}

	return (
		<RadixTheme
			accentColor={props.appInfo.accentColor}
			appearance={appearance}
			grayColor={props.appInfo.grayColor}
			radius="large"
		>
			<Toaster
				expand
				richColors
				theme={props.appInfo.appearanceColor}
				visibleToasts={16}
			/>
			{children}
		</RadixTheme>
	);
}
