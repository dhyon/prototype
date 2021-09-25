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
        <Box pb={5} px={[5, 5, 8]}>
          <Box position="relative">
            <Image
              src={game.image || '#'}
              width="100%"
              borderTopRadius="lg"
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

          <Box
            mb={[1, 1, 2]}
            bgGradient="linear(-145deg, #FB933C, #FEC60F)"
            variant="outline"
            height="4px"
          ></Box>

          <Box py={2} mb={ 2 }>
            { game.description }
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
                  <LoremIpsum />
                </TabPanel>
                <TabPanel px={2}>
                  <LoremIpsum />
                </TabPanel>
                <TabPanel px={2}>
                  <LoremIpsum />
                </TabPanel>

                <TabPanel px={2}>
                  <LoremIpsum />
                </TabPanel>

                <TabPanel px={2}>
                  <LoremIpsum />
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
      _id: '6083562f1b5bc51379ab9e14',
      deactivated: false,
      name: 'Discovery of Iris',
      description:
        'The rogue planet, Iris, dense with invaluable materials, draws in and collides with seven child planets in a remote region of space, creating what is henceforth referred to as “The Cataclysm”. When combined, these eight elements create a form of free energy. The collision creates a massively valuable debris field.',
      image: 'https://storage.googleapis.com/nft-assets/ReBirth/poster-1/discovery-of-iris.jpg',
      media: {
        qrInstagram: 'https://www.instagram.com/ar/509001183595301/',
        qrFacebook: 'https://www.facebook.com/fbcameraeffects/tryit/509001183595301/',
        audio: 'https://storage.googleapis.com/nft-assets/ReBirth/poster-1/discovery-of-iris.mp3',
        sketchfab: '1de40e7d081946b989aa4017e807c3aa',
      },
      attributes: {
        itemType: 'collectible',
        rarity: 'common',
        tier: 1,
        class: 'poster',
        score: 1,
        musician: 'Blond:ish x Jason Silva',
      },
      symbol: 'DOI',
      markets: [
        {
          _id: '6131c9fe5d6a474a6cc48886',
          id: 'AYXTVttPfhYmn3jryX5XbRjwPK2m9445mbN2iLyRD6nq',
          quotePair: 'USDC',
        },
      ],
      totalSupply: 10561,
      mint: 'HAWy8kV3bD4gaN6yy6iK2619x2dyzLUBj1PfJiihTisE',
      network: 'mainnet-beta',
      tradeSettings: { expireTime: 1619906400, saleTime: 1619301600 },
      updatedAt: '2021-09-03T07:08:46.571Z',
      airdrops: [],
      primarySales: [],
    },
    {
      _id: '6083562f1b5bc51379ab9e15',
      deactivated: false,
      name: 'The Heart of Star Atlas',
      description:
        'At the core of Star Atlas lies a treasure trove of priceless data. After an unsuspecting deep space explorer discovers “The Cataclysm”, he scans its riches, creating what will once be known as the first intergalactic data block. He sells this invaluable information to all three rival factions, igniting a lethal spark that forever changes the course of history.',
      image:
        'https://storage.googleapis.com/nft-assets/ReBirth/poster-2/the-heart-of-star-atlas.jpg',
      media: {
        qrInstagram: 'https://www.instagram.com/ar/127521576013844/',
        qrFacebook: 'https://www.facebook.com/fbcameraeffects/tryit/127521576013844/',
        audio:
          'https://storage.googleapis.com/nft-assets/ReBirth/poster-2/the-heart-of-star-atlas.mp3',
        sketchfab: '7262398b14e4495d84b2edd92363ab3f',
      },
      attributes: {
        itemType: 'collectible',
        tier: 2,
        rarity: 'uncommon',
        class: 'poster',
        score: 1,
        musician: 'Blond:ish',
      },
      symbol: 'HOSA',
      markets: [
        {
          _id: '6131c9fe5d6a474a6cc48889',
          id: '5Erzgrw9pTjNWLeqHp2sChJq7smB7WXRQYw9wvkvA59t',
          quotePair: 'USDC',
        },
      ],
      totalSupply: 6633,
      mint: 'ATSPo9f9TJ3Atx8SuoTYdzSMh4ctQBzYzDiNukQDmoF7',
      network: 'mainnet-beta',
      tradeSettings: { expireTime: 1620511200, saleTime: 1619906400 },
      airdrops: [],
      primarySales: [],
      updatedAt: '2021-09-03T07:08:46.645Z',
    },
    {
      _id: '6083562f1b5bc51379ab9e16',
      deactivated: false,
      name: 'The Convergence War',
      description:
        'All three factions, thinking they were the sole owners of the cataclysmic data drop, converge to settle the area. A devastating war breaks out across the galaxy after their inability to settle the disputed territory.',
      image: 'https://storage.googleapis.com/nft-assets/ReBirth/poster-3/the-convergence-war.jpg',
      media: {
        qrInstagram: 'https://www.instagram.com/ar/315191590023698/',
        qrFacebook: 'https://www.facebook.com/fbcameraeffects/tryit/315191590023698/',
        audio: 'https://storage.googleapis.com/nft-assets/ReBirth/poster-3/the-convergence-war.mp3',
        sketchfab: '5f05371aaf35427b830ddb98245faf2e',
      },
      attributes: {
        itemType: 'collectible',
        tier: 3,
        rarity: 'uncommon',
        class: 'poster',
        score: 1,
        musician: 'BASSJACKERS',
      },
      symbol: 'TCW',
      markets: [
        {
          _id: '6131c9fe5d6a474a6cc4888c',
          id: 'DXPv2ZyMD6Y2mDenqYkAhkvGSjNahkuMkm4zv6DqB7RF',
          quotePair: 'USDC',
        },
      ],
      totalSupply: 3104,
      mint: '36s6AFRXzE9KVdUyoJQ5y6mwxXw21LawYqqwNiQUMD8s',
      network: 'mainnet-beta',
      tradeSettings: { expireTime: 1621116000, saleTime: 1620511200 },
      airdrops: [],
      primarySales: [],
      updatedAt: '2021-09-03T07:08:46.706Z',
    },
    {
      _id: '6083562f1b5bc51379ab9e17',
      deactivated: false,
      name: 'Short Story of a Lost Astronaut',
      description:
        'He thought it would be just another routine exploration mission. Get there, scan, save data blocks and return. But when a surprise radiation storm knocked out his spaceship and swept him up into its high-velocity current, the only thing that saved him from certain doom was his custom ion shield.',
      image:
        'https://storage.googleapis.com/nft-assets/ReBirth/poster-4/short-story-of-a-lost-astronaut.jpg',
      media: {
        qrInstagram: 'https://www.instagram.com/ar/458565128570231/',
        qrFacebook: 'https://www.facebook.com/fbcameraeffects/tryit/458565128570231/',
        audio:
          'https://storage.googleapis.com/nft-assets/ReBirth/poster-4/short-story-of-a-lost-astronaut.mp3',
        sketchfab: 'da02ca47cc44488db3adacd86ebc78d2',
      },
      attributes: {
        itemType: 'collectible',
        tier: 4,
        rarity: 'rare',
        class: 'poster',
        score: 2,
        musician: 'Steve James',
      },
      symbol: 'LOST',
      markets: [
        {
          _id: '6131c9fe5d6a474a6cc4888f',
          id: '73d9N7BbWVKBG6A2xwwwEHcxzPB26YzbMnRjue3DPzqs',
          quotePair: 'USDC',
        },
      ],
      totalSupply: 928,
      mint: 'BgiTVxW9uLuHHoafTd2qjYB5xjCc5Y1EnUuYNfmTwhvp',
      network: 'mainnet-beta',
      tradeSettings: { expireTime: 1621720800, saleTime: 1621116000 },
      airdrops: [],
      primarySales: [],
      updatedAt: '2021-09-03T07:08:46.766Z',
    },
  ];
  //   let games = await fetch("http://localhost:3000/api/data/startatlas/markets");

  const paths = data.map((el, idx) => {
    return {
      params: {
        id: el['_id'],
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
      _id: '6083562f1b5bc51379ab9e14',
      deactivated: false,
      name: 'Discovery of Iris',
      description:
        'The rogue planet, Iris, dense with invaluable materials, draws in and collides with seven child planets in a remote region of space, creating what is henceforth referred to as “The Cataclysm”. When combined, these eight elements create a form of free energy. The collision creates a massively valuable debris field.',
      image: 'https://storage.googleapis.com/nft-assets/ReBirth/poster-1/discovery-of-iris.jpg',
      media: {
        qrInstagram: 'https://www.instagram.com/ar/509001183595301/',
        qrFacebook: 'https://www.facebook.com/fbcameraeffects/tryit/509001183595301/',
        audio: 'https://storage.googleapis.com/nft-assets/ReBirth/poster-1/discovery-of-iris.mp3',
        sketchfab: '1de40e7d081946b989aa4017e807c3aa',
      },
      attributes: {
        itemType: 'collectible',
        rarity: 'common',
        tier: 1,
        class: 'poster',
        score: 1,
        musician: 'Blond:ish x Jason Silva',
      },
      symbol: 'DOI',
      markets: [
        {
          _id: '6131c9fe5d6a474a6cc48886',
          id: 'AYXTVttPfhYmn3jryX5XbRjwPK2m9445mbN2iLyRD6nq',
          quotePair: 'USDC',
        },
      ],
      totalSupply: 10561,
      mint: 'HAWy8kV3bD4gaN6yy6iK2619x2dyzLUBj1PfJiihTisE',
      network: 'mainnet-beta',
      tradeSettings: { expireTime: 1619906400, saleTime: 1619301600 },
      updatedAt: '2021-09-03T07:08:46.571Z',
      airdrops: [],
      primarySales: [],
    },
    {
      _id: '6083562f1b5bc51379ab9e15',
      deactivated: false,
      name: 'The Heart of Star Atlas',
      description:
        'At the core of Star Atlas lies a treasure trove of priceless data. After an unsuspecting deep space explorer discovers “The Cataclysm”, he scans its riches, creating what will once be known as the first intergalactic data block. He sells this invaluable information to all three rival factions, igniting a lethal spark that forever changes the course of history.',
      image:
        'https://storage.googleapis.com/nft-assets/ReBirth/poster-2/the-heart-of-star-atlas.jpg',
      media: {
        qrInstagram: 'https://www.instagram.com/ar/127521576013844/',
        qrFacebook: 'https://www.facebook.com/fbcameraeffects/tryit/127521576013844/',
        audio:
          'https://storage.googleapis.com/nft-assets/ReBirth/poster-2/the-heart-of-star-atlas.mp3',
        sketchfab: '7262398b14e4495d84b2edd92363ab3f',
      },
      attributes: {
        itemType: 'collectible',
        tier: 2,
        rarity: 'uncommon',
        class: 'poster',
        score: 1,
        musician: 'Blond:ish',
      },
      symbol: 'HOSA',
      markets: [
        {
          _id: '6131c9fe5d6a474a6cc48889',
          id: '5Erzgrw9pTjNWLeqHp2sChJq7smB7WXRQYw9wvkvA59t',
          quotePair: 'USDC',
        },
      ],
      totalSupply: 6633,
      mint: 'ATSPo9f9TJ3Atx8SuoTYdzSMh4ctQBzYzDiNukQDmoF7',
      network: 'mainnet-beta',
      tradeSettings: { expireTime: 1620511200, saleTime: 1619906400 },
      airdrops: [],
      primarySales: [],
      updatedAt: '2021-09-03T07:08:46.645Z',
    },
    {
      _id: '6083562f1b5bc51379ab9e16',
      deactivated: false,
      name: 'The Convergence War',
      description:
        'All three factions, thinking they were the sole owners of the cataclysmic data drop, converge to settle the area. A devastating war breaks out across the galaxy after their inability to settle the disputed territory.',
      image: 'https://storage.googleapis.com/nft-assets/ReBirth/poster-3/the-convergence-war.jpg',
      media: {
        qrInstagram: 'https://www.instagram.com/ar/315191590023698/',
        qrFacebook: 'https://www.facebook.com/fbcameraeffects/tryit/315191590023698/',
        audio: 'https://storage.googleapis.com/nft-assets/ReBirth/poster-3/the-convergence-war.mp3',
        sketchfab: '5f05371aaf35427b830ddb98245faf2e',
      },
      attributes: {
        itemType: 'collectible',
        tier: 3,
        rarity: 'uncommon',
        class: 'poster',
        score: 1,
        musician: 'BASSJACKERS',
      },
      symbol: 'TCW',
      markets: [
        {
          _id: '6131c9fe5d6a474a6cc4888c',
          id: 'DXPv2ZyMD6Y2mDenqYkAhkvGSjNahkuMkm4zv6DqB7RF',
          quotePair: 'USDC',
        },
      ],
      totalSupply: 3104,
      mint: '36s6AFRXzE9KVdUyoJQ5y6mwxXw21LawYqqwNiQUMD8s',
      network: 'mainnet-beta',
      tradeSettings: { expireTime: 1621116000, saleTime: 1620511200 },
      airdrops: [],
      primarySales: [],
      updatedAt: '2021-09-03T07:08:46.706Z',
    },
    {
      _id: '6083562f1b5bc51379ab9e17',
      deactivated: false,
      name: 'Short Story of a Lost Astronaut',
      description:
        'He thought it would be just another routine exploration mission. Get there, scan, save data blocks and return. But when a surprise radiation storm knocked out his spaceship and swept him up into its high-velocity current, the only thing that saved him from certain doom was his custom ion shield.',
      image:
        'https://storage.googleapis.com/nft-assets/ReBirth/poster-4/short-story-of-a-lost-astronaut.jpg',
      media: {
        qrInstagram: 'https://www.instagram.com/ar/458565128570231/',
        qrFacebook: 'https://www.facebook.com/fbcameraeffects/tryit/458565128570231/',
        audio:
          'https://storage.googleapis.com/nft-assets/ReBirth/poster-4/short-story-of-a-lost-astronaut.mp3',
        sketchfab: 'da02ca47cc44488db3adacd86ebc78d2',
      },
      attributes: {
        itemType: 'collectible',
        tier: 4,
        rarity: 'rare',
        class: 'poster',
        score: 2,
        musician: 'Steve James',
      },
      symbol: 'LOST',
      markets: [
        {
          _id: '6131c9fe5d6a474a6cc4888f',
          id: '73d9N7BbWVKBG6A2xwwwEHcxzPB26YzbMnRjue3DPzqs',
          quotePair: 'USDC',
        },
      ],
      totalSupply: 928,
      mint: 'BgiTVxW9uLuHHoafTd2qjYB5xjCc5Y1EnUuYNfmTwhvp',
      network: 'mainnet-beta',
      tradeSettings: { expireTime: 1621720800, saleTime: 1621116000 },
      airdrops: [],
      primarySales: [],
      updatedAt: '2021-09-03T07:08:46.766Z',
    },
  ];

  return {
    props: {
      // id: params.id,
      game: data.filter((el) => {
        return el['_id'] === params.id;
      })[0],
      //       handle: "game/" + params.handle,
    },
  };
}
