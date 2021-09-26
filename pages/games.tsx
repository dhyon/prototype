import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import { Box, Image, Heading, SimpleGrid } from '@chakra-ui/react';

import GameCard from '../components/game-card';
import siteStore from '../stores/site';

const Home: NextPage = () => {
  let state: any = {};
  state = siteStore((state) => state);

  return (
    <Layout title="All games">
      <Box p={[5, 5, 8]}>
        <Heading fontWeight="bold" textTransform="uppercase" mb={[5, 5,]}>
          All games
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} spacing={[4, 4, 8]}>
          {state.games.map((el: any) => {
            return <GameCard key={el._id} el={el} />;
          })}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Home;
