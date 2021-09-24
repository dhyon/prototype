import {Heading,  Box, Image, Button, } from '@chakra-ui/react';
import Link from "next/link";

function GameCard({ el }) {
  debugger
  return (
    <Link href={ "/game/" + el._id }>
      <Box rounded="lg" overflow="hidden">
    <Box key={el._id}  height="250px" cursor="pointer"  rounded="md" >
      <Image src={ el.image } height="100%" width="100%" objectFit="cover" />
    </Box>

    <Box bgGradient="linear(-145deg, #FB933C, #FEC60F)" variant="outline" height="4px" >
    </Box>

      <Box p={3}>

    <Heading size="md">
    {el.name}
    </Heading>

    <Box color="gray.500">
    {el.attributes.itemType.charAt(0).toUpperCase() + el.attributes.itemType.slice(1)}
    </Box>

    </Box>

   
    </Box>

    </Link>
  );
}

export default GameCard;
