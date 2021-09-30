import {
	Box, 

} from "@chakra-ui/react";

function Rarity ({ val }) {
	let color, gradient;


	switch ( val ) {
		case "epic":
			color = "pink.500";
			
			break;

			case "rare":
			color = "red.500";
			
			break;
	
		default:
			color = "green.500";
			break;
	}
	return <Box>
		<Box display="inline-block" bg={ color } textTransform="uppercase" px={2} py={1}>
			{ val }
		</Box>

	</Box>
}
export default Rarity;