import { Heading, Box, Image, Button } from '@chakra-ui/react';
import Link from 'next/link';

function GameCard({ game }) {
  return (
    <Link href={game.slug ? '/game/' + game.slug : ''}>
      <Box cursor="pointer" borderWidth={1} rounded="lg" display="inline-block" position="relative">
        <Image src={game.image} height="400px" rounded="lg" objectFit="cover" width="100%" />

        <Box
          position="absolute"
          width="100%"
          bottom={0}
          backgroundColor="white"
          padding="10px"
          textAlign="center"
          roundedBottom="lg"
        >
          <Heading fontSize="24px" color="black" letterSpacing={1}>
            {game.name}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
}

export default GameCard;
