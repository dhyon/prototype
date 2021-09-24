import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import { HStack, Box, Image, Heading, Button, SimpleGrid, Center } from '@chakra-ui/react';
import { useState } from 'react';
import siteStore from '../stores/site';
import GameCard from '../components/game-card';

const Home: NextPage = () => {
  let state: any = {};
  state = siteStore((state) => state);

  return (
    <Layout title="Home">
      <Box height="50vh" maxHeight="600px" position="relative">
        <Image
          src="/hero.jpg"
          position="absolute"
          top={0}
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />

        <Box position="absolute" bottom={[10, 10, 20]} width="100%" px={[10, 10, 20]} zIndex={2}>
          <Button isDisabled>Solana</Button>

          <SimpleGrid columns={[1, 1, 2]} my={4} spacing={8}>
            <Box>
              <Heading color="white" size="4xl">
                Star atlas
              </Heading>
            </Box>

            <Box height="100%">
              <Center height="100%">
                <SimpleGrid columns={[2, 2, 2, 4]} spacing={3} width={['100%', 400, 600]}>
                  {['yellow', 'green', 'red', 'blue'].map((el: any) => {
                    return <Button key={ el } height={'50px'} colorScheme={el}></Button>;
                  })}
                </SimpleGrid>
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box overflow="hidden" pb={5}>
        <Box py={[5, 5, 10]} px={[10, 10, 20]} shadow="sm">
          <Heading size="sm" color="gray.500" mb={2}>
            NFTs
          </Heading>

          <HStack spacing={10} fontSize="lg" fontWeight="bold">
            <Box>All items</Box>

            <Box>Ships</Box>

            <Box>Structures</Box>
          </HStack>
        </Box>
      </Box>

      <Box py={[5, 5, 10]} px={[10, 10, 20]}>
        <Box>
          <SimpleGrid columns={[1, 1, 2]} spacing={[4, 4, 8]}>
            {state.data.map((el: any) => {
              return <Box key={el._id} >
               <GameCard el={el} />
               </Box>
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
