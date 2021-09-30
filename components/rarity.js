import { Box, useColorModeValue } from '@chakra-ui/react';

function Rarity({ val }) {
  let color, gradient;
	let heat = useColorModeValue(".400", ".300")
	let borderHeat = useColorModeValue(".300", ".400")

  switch (val) {
    case 'epic':
      color = 'pink';

      break;

    case 'rare':
      color = 'red';

      break;

		case 'common':
				color = 'blue';
	
				break;

    default:
      color = 'green';
      break;
  }
  return (
    <Box>
      <Box fontSize="xs" fontWeight="500" borderWidth={2} rounded="md" color={ color + heat } borderColor={ color + borderHeat } display="inline-block"  textTransform="uppercase" px={1} py={0.5}>
        {val}
      </Box>
    </Box>
  );
}
export default Rarity;
