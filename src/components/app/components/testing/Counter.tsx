import { Box, Button, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { AccentColors } from "@/lib";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	let color: AccentColors = "gray";

	if (counter > 0) {
		color = "green";
	} else if (counter < 0) {
		color = "red";
	} else {
		color = "gray";
	}

	return (
		<Box width="100%">
			<Heading align="center" className="selectable" size="8">
				Value:{" "}
				<Text className="selectable" color={color}>
					{counter}
				</Text>
			</Heading>
			<Box className="center" width="35%">
				<Separator className=" spacer bottom" size="4" />
				<Grid className="center" columns="2" gap="3">
					<Button
						color="green"
						onClick={() => setCounter(counter + 1)}
						size="2"
						variant="soft"
					>
						<Plus size={18} /> Add
					</Button>

					<Button
						color="red"
						onClick={() => setCounter(counter - 1)}
						variant="soft"
					>
						<Minus size={18} /> Remove
					</Button>
				</Grid>
			</Box>
		</Box>
	);
}
