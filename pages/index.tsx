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

    
    </Layout>
  );
};

export default Home;
