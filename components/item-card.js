import { Heading, Box, Image, Button } from '@chakra-ui/react';
import Link from 'next/link';
import NextImage from 'next/image';
import Rarity from './rarity';
import RarityGradient from './rarity-gradient';

function ItemCard({ el }) {

  let usdcPrice = Math.random(-1, 1) * 1000;

  let color = usdcPrice > 50 ? "red.500" : "green.500";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  return (
    <Link href={`/item/` + el._id}>
      <Box cursor="pointer" rounded="md" width="100%" overflow="hidden" borderWidth={1}>
        <Box
          key={el._id}
          height="145px"
          cursor="pointer"
          roundedTop="md"
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" top={3} left={3} zIndex={5} >
            <Box rounded="full" bg="#222222aa" backdropFilter="blur(4px)" color={ color } fontSize="xs" fontWeight="bold" py={1} px={2}>
              { usdcPrice.toFixed(2) } <Box color="white" display="inline-block">USDC</Box>
            </Box>
          </Box>


          <Box position="absolute" bottom={3} zIndex={5} width="100%" textAlign="center">
            <Rarity val={el.attributes.rarity} />
          </Box>

          <NextImage src={el.image} layout="fill" quality={5} objectFit="cover" />
        </Box>

        <RarityGradient val={el.attributes.rarity} />

        <Box p={3}>
          <Heading size="sm" >
            {el.name}
          </Heading>

          <Box color="gray.500" fontSize="sm">{capitalizeFirstLetter(el.attributes.itemType)}</Box>
        </Box>
      </Box>
    </Link>
  );
}

export default ItemCard;
