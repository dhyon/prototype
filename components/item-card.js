import { Heading, Box, Image, Button } from '@chakra-ui/react';
import Link from 'next/link';
import NextImage from 'next/image';
import Rarity from './rarity';

function ItemCard({ el }) {
  return (
    <Link href={`/item/` + el._id}>
      <Box cursor="pointer" rounded="md" width="100%" overflow="hidden" borderWidth={1}>
        <Box
          key={el._id}
          height="125px"
          cursor="pointer"
          roundedTop="md"
          position="relative"
          overflow="hidden"
        >
          <NextImage src={el.image} layout="fill" quality={5} objectFit="cover" />
        </Box>

        <Box p={3}>
          <Heading size="sm" mb={2}>
            {el.name}
          </Heading>
          <Box>
            <Rarity val={el.attributes.rarity} />
          </Box>

          {/* <Box>{el.totalSupply}</Box> */}
        </Box>
      </Box>
    </Link>
  );
}

export default ItemCard;
