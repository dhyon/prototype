import { Heading, Box, Image, Button } from '@chakra-ui/react';
import Link from 'next/link';

function GameCard({ el }) {
  return (
    <Link href={'/game/' + el.slug}>
      <Box cursor="pointer" borderWidth={1} rounded="lg" display="inline-block" position="relative">
        <Image
          src="/star-atlas.jpg"
          height="400px"
          rounded="lg"
          objectFit="cover"
          width="100%"
        />

        <Box position="absolute" width="100%" p={10} bottom={0}>
          <Heading color="white" letterSpacing={1}>
            {el.name}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
}

export default GameCard;
