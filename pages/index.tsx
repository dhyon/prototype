import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import { Box, Image } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Layout>
      <Box height="50vh" maxHeight="500px">
        <Image src="/hero.jpg" height="100%" layout="fill" objectFit="cover" width="100%" />
      </Box>
    </Layout>
  );
};

export default Home;
