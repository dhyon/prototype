import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import { useColorModeValue, Grid, Box, Image, Heading, SimpleGrid, Flex } from '@chakra-ui/react';

const Home: NextPage = () => {

  let cardBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Layout title="Dashboard">
      <Box px={[5, 5, 10, 10]}>
        <Heading
          fontWeight="bold"
          textTransform="uppercase"
          size="lg"
          as={'h1'}
          opacity="0"
          position="absolute"
        >
          Dashboard
        </Heading>

        <Grid templateColumns={['100% 100%', '100% 100%', '100% 100%', 'calc(100% - 256px) 256px']}>
          <Box>
            <SimpleGrid columns={[1, 2, 3]} spacing={[4, 4, 8]} mb={[4, 4, 8]}>
              <Box height="120px" bg={ cardBackground } rounded="md" shadow="md"></Box>
              <Box height="120px" bg={ cardBackground } rounded="md" shadow="md"></Box>
              <Box height="120px" bg={ cardBackground } rounded="md" shadow="md"></Box>
            </SimpleGrid>

            <Flex gridGap={[4, 4, 8]} mb={[4, 4, 8]}>
              <Box flex={2} height="120px" bg={ cardBackground } rounded="md" shadow="md"></Box>

              <Box flex={1} height="120px" bg={ cardBackground } rounded="md" shadow="md"></Box>
            </Flex>

            <SimpleGrid columns={[1, 1, 2]} spacing={[4, 4, 8]}>
              <Box bg={ cardBackground } rounded="md" shadow="md" p={5}>
                adfs
              </Box>

              <Box bg={ cardBackground } rounded="md" shadow="md" p={5 }>
                asdf
              </Box>
            </SimpleGrid>
          </Box>
          <Box gridRow={[2, 2, 2, 1]} gridColumn={[1, 1, 1, 2]} pl={[0, 0, 4]}>
            adsf
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
