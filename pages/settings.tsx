import type { NextPage } from 'next';
import Layout from '../components/layout';
import { Box, Image, Heading } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Layout title="Settings">
      <Box p={[5, 5, 8]}>
        <Heading fontWeight="bold" textTransform="uppercase">
          Settings
        </Heading>
      </Box>
    </Layout>
  );
};

export default Home;
