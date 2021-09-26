import {Heading,  Box, Image, Button, } from '@chakra-ui/react';
import Link from "next/link";

function ItemCard({ el }) {
  debugger
  return (
    <Link href={ "/game/" + el.slug }>
      <Box rounded="lg" overflow="hidden" borderWidth={1}>
    <Box key={el._id}  height="140px" cursor="pointer"  rounded="md" >
      <Image src={ el.image } height="100%" width="100%" objectFit="cover"  />
    </Box>


      <Box p={3}>

    <Heading size="sm">
    {el.name}
    </Heading>


    </Box>

   
    </Box>

    </Link>
  );
}

export default ItemCard;
