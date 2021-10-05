import { Text, Box, useColorModeValue } from '@chakra-ui/react';

function Rarity({ val }) {
  let color, gradient, min, max;
  let heat = useColorModeValue('.400', '.300');
  let borderHeat = useColorModeValue('.300', '.400');

  switch (val) {
    case 'epic':
      max = 'orange.300';
      min = 'yellow.400';
      break;

    case 'rare':
      max = 'red.300';
      min = 'orange.400';
      break;

    case 'common':
      max = 'blue.300';
      min = 'green.300';
      break;

    case 'legendary':
      max = 'purple.300';
      min = 'pink.300';
      break;

    case 'anomaly':
      max = 'blue.600';
      min = 'blue.300';
        break;

    default:
      max = 'gray.600';
      min = 'gray.500';
      break;
  }
  return (
    <Text
      bgGradient={`linear(to-r, ${min}, ${max})`}
      // bgClip="text"
      fontWeight="bold"
      fontSize="xs"
      letterSpacing={1}
      fontWeight="extrabold"
      // borderWidth={2}
      color="white"
      rounded="full"
      // color={color + heat}
      // borderColor={color + borderHeat}
      display="inline-block"
      textTransform="uppercase"
      px={2}
      py={1}
    >
      {val}
    </Text>
  );
}
export default Rarity;
