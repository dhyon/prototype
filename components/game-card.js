import { Heading, Box, Image, Button, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

function GameCard({ game }) {
  const { colorMode } = useColorMode();

  return (
    <Link href={game.slug ? '/game/' + game.slug : ''}>
      <Box cursor="pointer" borderWidth={1} rounded="lg" display="inline-block" position="relative">
        <Image src={game.image} height="400px" rounded="lg" objectFit="cover" width="100%" />

        <Box
          position="absolute"
          width="100%"
          bottom={0}
          backgroundColor={colorMode === 'light' ? 'white' : '#1a202c'}
          padding="10px"
          textAlign="center"
          roundedBottom="lg"
        >
          <Heading
            fontSize="24px"
            letterSpacing={1}
            color={colorMode === 'light' ? 'black' : 'white'}
          >
            {game.name}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
}

export default GameCard;
