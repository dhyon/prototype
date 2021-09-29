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
  SimpleGrid,
} from '@chakra-ui/react';
import useStore from '../../stores/site';
import ItemCard from '../../components/item-card';
import { useEffect, useState } from 'react';

const Page = ({ game = {} }) => {
  const [first, setFirst] = useState(true);
  const [items, setItems] = useState([]);
  const state = useStore((state) => state);
  const cardBg = useColorModeValue('gray.100', 'gray.700');

  // api call

  async function getGameData() {
    // let apiCall = await fetch(process.env.baseURL + '/api/data/staratlas/markets');
    let apiCall = await fetch('http://localhost:3000/api/data/staratlas/markets');
    let data = await apiCall.json();
    setItems(data);
  }

  useEffect(() => {
    first && getGameData();
    setFirst(false);
  }, []);
  return (
    <Layout title={game.name}>
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
              {game.symbol}
            </Heading>
          </Box>
        </Box>

        <Box p={[5, 5, 8]}>
          <Box mb={[5, 5, 8]}>
            <LoremIpsum />
          </Box>

          <Box>
            <Heading size="sm" color="gray.500" mb={[2, 2, 3]}>
              NFTs
            </Heading>

            <Tabs isLazy>
              <TabList gridGap={5}>
                <Tab fontWeight="bold">All Items</Tab>
                <Tab fontWeight="bold">Structure</Tab>
                <Tab fontWeight="bold">Cosmetic</Tab>
                <Tab fontWeight="bold">Access</Tab>
                <Tab fontWeight="bold">Ship</Tab>

                <Tab fontWeight="bold">Crew</Tab>
                <Tab fontWeight="bold">Equipment</Tab>
              </TabList>

              <TabPanels>
                <TabPanel px={0} py={[4, 4, 5, 6]}>
                  <SimpleGrid columns={[2, 3, 4]} spacing={[4, 4, 5, 6]}>
                    {items.map((el) => {
                      return (
                        <Box key={el._id}>
                          <ItemCard el={el} />
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel px={0} py={5}>
                  <SimpleGrid columns={[2, 3, 4]} spacing={[4, 4, 5, 6]}>
                    {items
                      .filter((el) => {
                        return el.attributes.itemType === 'structure';
                      })
                      .map((el) => {
                        return (
                          <Box key={el._id}>
                            <ItemCard el={el} />
                          </Box>
                        );
                      })}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel px={0} py={5}>
                  <SimpleGrid columns={[2, 3, 4]} spacing={[4, 4, 5, 6]}>
                    {items
                      .filter((el) => {
                        return el.attributes.itemType === 'cosmetic';
                      })
                      .map((el) => {
                        return (
                          <Box key={el._id}>
                            <ItemCard el={el} />
                          </Box>
                        );
                      })}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel px={0} py={5}>
                  <SimpleGrid columns={[2, 3, 4]} spacing={[4, 4, 5, 6]}>
                    {items
                      .filter((el) => {
                        return el.attributes.itemType === 'access';
                      })
                      .map((el) => {
                        return (
                          <Box key={el._id}>
                            <ItemCard el={el} />
                          </Box>
                        );
                      })}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel px={0} py={5}>
                  <SimpleGrid columns={[2, 3, 4]} spacing={[4, 4, 5, 6]}>
                    {items
                      .filter((el) => {
                        return el.attributes.itemType === 'ship';
                      })
                      .map((el) => {
                        return (
                          <Box key={el._id}>
                            <ItemCard el={el} />
                          </Box>
                        );
                      })}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel px={0} py={5}>
                  <SimpleGrid columns={[2, 3, 4]} spacing={[4, 4, 5, 6]}>
                    {items
                      .filter((el) => {
                        return el.attributes.itemType === 'crew';
                      })
                      .map((el) => {
                        return (
                          <Box key={el._id}>
                            <ItemCard el={el} />
                          </Box>
                        );
                      })}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel px={0} py={5}>
                  <SimpleGrid columns={[2, 3, 4]} spacing={[4, 4, 5, 6]}>
                    {items
                      .filter((el) => {
                        return el.attributes.itemType === 'equipment';
                      })
                      .map((el) => {
                        return (
                          <Box key={el._id}>
                            <ItemCard el={el} />
                          </Box>
                        );
                      })}
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
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
      name: 'Star Atlas',
      description: 'Lorem',
      slug: 'star-atlas',
      _id: 'foobar',
      image: '/star-atlas.jpg',
      symbol: 'SA',
    },
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
      name: 'Star Atlas',
      description: 'Lorem',
      slug: 'star-atlas',
      _id: 'foobar',
      image: '/star-atlas.jpg',
      symbol: 'SA',
    },
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
