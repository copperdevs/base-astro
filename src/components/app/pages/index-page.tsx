import { Box, Button, Flex, Heading, Separator } from "@radix-ui/themes";
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
						<Box className="center spacer vertical" width="35%">
							<Separator size="4" />
						</Box>
						<Flex className="center" direction="column" gap="3" width="35%">
							<Button
								onClick={() => goTo("https://github.com/copperdevs/base-astro")}
								style={{
									width: "100%",
								}}
								variant="soft"
							>
								<Github size="18" /> Source Code
							</Button>

							<Button
								onClick={() => goTo("/counter")}
								style={{
									width: "100%",
								}}
								variant="soft"
							>
								<Calculator size="18" /> Counter Example
							</Button>
						</Flex>
					</div>
				</div>
			</div>
		</BaseAppLayout>
	);
}
