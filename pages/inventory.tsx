import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import { Box, Image, Heading } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Layout title="Inventory">
      <Box p={[5, 5, 8]}>
        <Heading fontWeight="bold" textTransform="uppercase" >
          Inventory
        </Heading>
      </Box>
    </Layout>
  );
};

export default Home;
