import { Box, Button, Grid, Heading, Separator } from "@radix-ui/themes";
import { Calculator, Github } from "lucide-react";
import { BaseAppLayout } from "@/components/app/layouts/base-app-layout";
import { goTo, type PageProps } from "@/lib";

export default function IndexPage({ props }: { props: PageProps }) {
	return (
		<BaseAppLayout props={props}>
			<div className="pagecenter scrollable">
				<div className="contentcenter">
					<div className="content">
						<Heading align="center">Coppers Base Astro </Heading>
						<Box className="center spacer vertical" width="25%">
							<Separator size="4" />
						</Box>
						<Grid className="center" gap="3" width="25%">
							<Button
								onClick={() => goTo("https://github.com/copperdevs/base-astro")}
								variant="soft"
							>
								<Github size="18" /> Source Code
							</Button>

							<Button onClick={() => goTo("/counter")} variant="soft">
								<Calculator size="18" /> Counter Example
							</Button>
						</Grid>
					</div>
				</div>
			</div>
		</BaseAppLayout>
	);
}
