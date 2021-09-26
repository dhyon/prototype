// import type { NextPage } from 'next';
// import Image from 'next/image'

import { LoremIpsum } from 'react-lorem-ipsum';
import Layout from '../../components/layout';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Box,
  Image,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const Page = ({ game = {} }) => {
  const cardBg = useColorModeValue('gray.100', 'gray.700');
  return (
    <Layout title="Dashboard">
      <Box overflow="hidden">

      <Box position="relative">
            <Image
              src={game.image || '#'}
              width="100%"
              height={[200, 300, '400px']}
              loading="lazy"
              objectFit="cover"
            />

            <Box position="absolute" p={[10, 10, 20]} px={[8, 8, 10]} bottom={0}>
              <Heading color="white" size="4xl">
                {game.name}
              </Heading>

              <Heading color="gray.500" size="lg">
                { game.symbol }

              </Heading>
            </Box>
          </Box>

         


        <Box p={[5, 5, 8]}>

          <Box mb={ 2 }>
          <LoremIpsum />
          </Box>

          <Box>
            <Heading size="sm" color="gray.500" mb={[2, 2, 3]}>
              NFTs
            </Heading>

            <Tabs isLazy>
              <TabList gridGap={5}>
                <Tab fontWeight="bold">All items</Tab>
                <Tab fontWeight="bold">Ships</Tab>
                <Tab fontWeight="bold">Structures</Tab>
                <Tab fontWeight="bold">Access</Tab>
                <Tab fontWeight="bold">Collectibles</Tab>
              </TabList>

              <TabPanels>
                <TabPanel px={2}>
                </TabPanel>
                <TabPanel px={2}>
                </TabPanel>
                <TabPanel px={2}>
                </TabPanel>

                <TabPanel px={2}>
                </TabPanel>

                <TabPanel px={2}>
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Box height="200px" bg={cardBg} rounded="lg" transition="0.1s ease"></Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Page;

export async function getStaticPaths() {
  const data = [
    {
      name: "Star Atlas",
      description: "Lorem", 
      slug: "star-atlas", 
      _id: "foobar", 
      image: "/star-atlas.jpg", 
      symbol: "SA", 
    }
  ];

  const paths = data.map((el, idx) => {
    return {
      params: {
        slug: el['slug'],
        data: el,

        // handle: el["_id"],
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params, locale, locales, preview }) {
  const data = [
    {
      name: "Star Atlas",
      description: "Lorem", 
      slug: "star-atlas", 
      _id: "foobar", 
      image: "/star-atlas.jpg", 
      symbol: "SA",

    }
  ];

  return {
    props: {
      // id: params.id,
      game: data.filter((el) => {
        return el['slug'] === params.slug;
      })[0],
      //       handle: "game/" + params.handle,
    },
  };
}
