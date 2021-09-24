import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import { HStack, Box, Image, Heading, Button, SimpleGrid, Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import siteStore from "../stores/site";


const Home: NextPage = () => {
  const [first, setFirst] = useState(true);
  const [items, setItems] = useState([]);
  const state = siteStore(state => state);
  

  function fetchFromApi() {
    fetch('https://prototype-weld.vercel.app/api/data/staratlas/markets')
      .then(setApiData)
      .catch(apiError);
  }

  function setApiData(resp) {
  }

  function apiError(err) {
  }

  useEffect(() => {
    if (first) {
    }
  });

  

  return (
    <Layout>
      <Box height="50vh" maxHeight="600px" position="relative">
        <Image
          src="/hero.jpg"
          position="absolute"
          top={0}
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          width="100%"
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
                  {['yellow', 'green', 'red', 'blue'].map((el) => {
                    return <Button height={'50px'} colorScheme={el}></Button>;
                  })}
                </SimpleGrid>
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box py={[5, 5, 10]} px={[10, 10, 20]}>
        <Heading size="sm" color="gray.500" mb={2}>
          NFTs
        </Heading>

        <HStack spacing={10} fontSize="lg" fontWeight="bold">
          <Box>All items</Box>

          <Box>Ships</Box>

          <Box>Structures</Box>
        </HStack>
      </Box>

      <Box py={[5, 5, 10]} px={[10, 10, 20]} pt={[0, 0, 0]}>
        <Box height="700px" bg="gray.200" rounded="lg" p={5}>
          <SimpleGrid columns={[2, 3, 4]} spacing={[4, 4, 8]}>

          {
            state.data.map( el => {
              return <Box key={el._id} bg="orange.300" height="100px">
                { el._id }
                </Box>
            })
          }

          </SimpleGrid>


        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
