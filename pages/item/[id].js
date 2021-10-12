// import type { NextPage } from 'next';
// import Image from 'next/image'
import Countdown from 'react-countdown';

import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryBrushContainer,
  VictoryAxis,
} from 'victory';
import Rarity from '../../components/rarity';
import RarityGradient from '../../components/rarity-gradient';

import Layout from '../../components/layout';
import {
  Button,
  Box,
  Divider,
  Stack,
  Image,
  Heading,
  HStack,
  useColorModeValue,
  Tooltip,
  SimpleGrid,
} from '@chakra-ui/react';
import { getAllStarAtlasMarkets } from '../api/data/staratlas/markets';
import { getMarketData } from '../api/data/staratlas/markets/[marketId]';
import { useState } from 'react';

const Page = ({ item = {}, marketData = {}, id }) => {
  // TODO: if item/marketData are undefined/null then we should gracefully display an error message
  // let bg = useColorModeValue('green.200', 'red.500')

  const [zoomDomain, setZoomDomain] = useState({});
  const [selectedDomain, setSelectedDomain] = useState({});
  const colors = ['blue', 'red', 'green', 'orange', 'purple', 'teal', 'yellow'];
  const lightBg = useColorModeValue('gray.200', 'gray.700');
  const strokeColor = useColorModeValue('#7956DD', '#B399FF');
  const axisLabelColor = useColorModeValue('gray.800', 'gray.100');
  const selectedStrokeColor = useColorModeValue('tomato', 'tomato');
  const btnColor = useColorModeValue('titan', 'titanLight');
  const gridImage = useColorModeValue('/grid-light.jpg', '/dark-grid.jpg');
  let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
    const scaledIndex = Math.floor(index % 7);
    return {
      x: Math.random(-2, 2),
      y: Math.random(-2, 2),
      size: Math.random(10) * 10 + 10,
      symbol: 'circle',
      fill: colors[index],
      opacity: 0.6,
    };
  });

  function handleZoom(domain) {
    setSelectedDomain(domain);
  }

  function handleBrush(domain) {
    setZoomDomain(domain);
  }

  return (
    <Layout title={item.name}>
      <Box p={5}>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <Box rounded="lg" overflow="hidden">
              <Box position="relative" height="300px">
                <Box position="absolute" p={[5, 5, 8]} px={[5, 5, 5]} bottom={0}>
                  <Heading color="gray.300" size="lg" mb={2}>
                    {item.symbol}
                  </Heading>

                  <Rarity val={item.attributes.rarity} />
                </Box>

                <Image
                  src={item.image || '#'}
                  width="100%"
                  height={['100%']}
                  loading="lazy"
                  objectFit="cover"
                />
              </Box>

              <RarityGradient size="8px" val={item.attributes.rarity} />
            </Box>

            <Box mb={2}></Box>

            <Heading size="xl" mb={2}>
              {item.name}
            </Heading>

            <Box mb={5} fontSize="sm">
              {item.description}
            </Box>

            <HStack height={8}>
              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  Last sold by
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  Dr.Doctorstein
                </Box>
              </Box>

              <Divider orientation="vertical" />

              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  Instant price
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  {(Math.random() * 100).toFixed(2)} USDC
                </Box>
              </Box>

              <Divider orientation="vertical" />
              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  Aunction ends:
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                <Countdown     zeroPadDays={0} 
 date={Date.now() + 59000} />

                </Box>
              </Box>
            </HStack>
          </Box>

          <Box px={5}>
            <Button colorScheme="purpe" bg={btnColor} width="100%" mb={2} size="lg" color="white">
              Place a bid
            </Button>

            <Button colorScheme="purpe" variant="outline" width="100%" size="lg" mb={4}>
              Buy it now
            </Button>

            <Heading size="md" mb={-5}>
              Price v. Time
            </Heading>

            <VictoryChart
              width={500}
              height={300}
              scale={{ x: 'time' }}
              containerComponent={
                <VictoryZoomContainer
                  responsive={false}
                  zoomDimension="x"
                  zoomDomain={zoomDomain}
                  onZoomDomainChange={handleZoom.bind(this)}
                />
              }
            >
              <VictoryLine
                style={{
                  data: { stroke: strokeColor },
                }}
                data={[
                  { x: new Date(2020, 1, 1), y: 125 },
                  { x: new Date(2020, 4, 1), y: 257 },
                  { x: new Date(2020, 7, 1), y: 345 },
                  { x: new Date(2020, 10, 1), y: 515 },
                  { x: new Date(2021, 1, 1), y: 132 },
                  { x: new Date(2021, 4, 1), y: 305 },
                  { x: new Date(2021, 7, 1), y: 270 },
                  { x: new Date(2021, 10, 1), y: 470 },
                ]}
              />
            </VictoryChart>

            <VictoryChart
              width={500}
              height={90}
              scale={{ x: 'time' }}
              padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
              containerComponent={
                <VictoryBrushContainer
                  responsive={false}
                  brushDimension="x"
                  brushDomain={selectedDomain}
                  onBrushDomainChange={handleBrush.bind(this)}
                />
              }
            >
              <VictoryAxis
                tickValues={[
                  new Date(2020, 1, 1),
                  new Date(2020, 4, 1),
                  new Date(2020, 7, 1),
                  new Date(2020, 10, 1),
                  new Date(2021, 1, 1),
                  new Date(2021, 4, 1),
                  new Date(2021, 7, 1),
                ]}
                tickFormat={(x) => new Date(x).getFullYear()}
              />
              <VictoryLine
                style={{
                  data: { stroke: selectedStrokeColor },
                }}
                data={[
                  { x: new Date(2020, 1, 1), y: 125 },
                  { x: new Date(2020, 4, 1), y: 257 },
                  { x: new Date(2020, 7, 1), y: 345 },
                  { x: new Date(2020, 10, 1), y: 515 },
                  { x: new Date(2021, 1, 1), y: 132 },
                  { x: new Date(2021, 4, 1), y: 305 },
                  { x: new Date(2021, 7, 1), y: 270 },
                  { x: new Date(2021, 10, 1), y: 470 },
                ]}
              />
            </VictoryChart>
          </Box>
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const markets = await getAllStarAtlasMarkets();
  const item = markets.filter((item) => item._id === id)[0];
  if (!item) return { props: { id: id } };
  const marketData = await getMarketData(item.markets[0].id);

  return {
    props: {
      id: id,
      item: item,
      marketData: marketData,
    },
  };
}

export default Page;

function Bubble({ el, idx }) {
  const bg = useColorModeValue(el + '.400', el + '.200');
  const size = Math.random() * 100 + idx;
  return (
    <Tooltip label={<Box height="200px" width="200px"></Box>}>
      <Box
        bg={bg}
        cursor="pointer"
        width={size}
        height={size}
        rounded="full"
        opacity={0.8}
        _hover={{ opacity: 0.98 }}
        borderWidth={2}
        position="absolute"
        left={Math.random() * 80 + '%'}
        top={Math.random() * 80 + '%'}
        zIndex={10}
      ></Box>
    </Tooltip>
  );
}
