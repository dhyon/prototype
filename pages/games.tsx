import type { NextPage } from 'next'
// import Image from 'next/image'
import Layout from "../components/layout";
import { Box, Image, Heading, SimpleGrid   } from "@chakra-ui/react";

import GameCard  from '../components/game-card';
import siteStore from "../stores/site";


const Home: NextPage = () => {
  const state = siteStore( state => state );

  return (
    <Layout title="All games">

    <Box px={[5, 5, 10]}>
        <Heading fontWeight="bold" textTransform="uppercase" size="lg" mb={[4, 4, 8]}>
          All games
        </Heading>


      <SimpleGrid columns={[1, 1, 2]} spacing={[4, 4, 8]}>
        {
            state.data.map( el => {
              return <GameCard key={ el._id } el={ el } />;
            })
          }
          </SimpleGrid>
      </Box>

    
    </Layout>
  )
}

export default Home
