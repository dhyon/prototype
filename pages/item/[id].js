// import type { NextPage } from 'next';
// import Image from 'next/image'
import NextLink from 'next/link';
import Countdown from 'react-countdown';

import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryVoronoiContainer,
} from 'victory';
import Rarity from '../../components/rarity';
import RarityGradient from '../../components/rarity-gradient';
import useWalletStore from '../../stores/wallet';
import Layout from '../../components/layout';
import NextImage from 'next/image';
import {
  Button,
  Box,
  Divider,
  Stack,
  Center,
  Image,
  Link as ChakraLink,
  Heading,
  HStack,
  useColorModeValue,
  Tooltip,
  Flex,
  Spacer,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalFooter,
  VStack,
  Text,
} from '@chakra-ui/react';
import { getAllStarAtlasMarkets } from '../api/data/staratlas/markets';
import { getMarketData } from '../api/data/staratlas/markets/[marketId]';
import { useState } from 'react';

const Page = ({ item = {}, marketData = {}, id }) => {
  // TODO: if item/marketData are undefined/null then we should gracefully display an error message
  // let bg = useColorModeValue('green.200', 'red.500')
  const [addItem, walletIsConnected] = useWalletStore((state) => [
    state.addItem,
    state.isConnected,
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [zoomDomain, setZoomDomain] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const price = marketData.recentFills[0]?.price || 777;
  const [selectedDomain, setSelectedDomain] = useState({});
  const colors = ['blue', 'red', 'green', 'orange', 'purple', 'teal', 'yellow'];
  const lightBg = useColorModeValue('gray.200', 'gray.700');
  const strokeColor = useColorModeValue('#7956DD', '#B399FF');
  const axisLabelColor = useColorModeValue('black', 'white');
  const titanColor = useColorModeValue('titan', 'titanLight');
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

  function buyNow() {
    setIsDisabled(true);
    addItem(id, price);
    setTimeout(setBought, 1000);
  }

  function setBought() {
    setIsDisabled(false);
    setIsBought(true);
  }

  function modalContent() {
    if (isBought) {
      return (
        <Box>
          <Heading size="lg" my={2}>
            Congratulations!
          </Heading>

          <Box mb={2}>
            You have successfully purchased: <ChakraLink fontWeight="bold">{item.name}</ChakraLink>.
          </Box>

          <Box>You can now find your item in your inventory.</Box>
        </Box>
      );
    } else {
      return (
        <Box>
          <Heading size="lg" mb={2}>
            {item.name}
          </Heading>
          <Box mb={2}>{item.description}</Box>

          <Heading size="md">{price} USDC</Heading>
        </Box>
      );
    }
  }

  function modalButtons() {
    if (isBought) {
      return (
        <HStack>
          <Button colorScheme="gray" variant="outline" size="sm" onClick={onClose}>
            CLOSE
          </Button>

          <NextLink href="/inventory">
            <Button colorScheme="orange" variant="outline" size="sm">
              GO TO INVENTORY
            </Button>
          </NextLink>
        </HStack>
      );
    } else {
      return (
        <HStack>
          <Button
            colorScheme="orange"
            variant="outline"
            size="sm"
            onClick={onClose}
            isLoading={isDisabled}
          >
            CANCEL
          </Button>

          <Button colorScheme="blue" size="sm" variant="outline" isLoading={isDisabled}>
            PLACE BID
          </Button>

          <Button colorScheme="green" size="sm" onClick={buyNow} isLoading={isDisabled}>
            BUY NOW
          </Button>
        </HStack>
      );
    }
  }

  return (
    <Layout title={item.name}>
      <Box p={5}>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <Box rounded="lg" overflow="hidden">
              <Box rounded="md" position="relative" height="300px">
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

            <Heading size="xl" mt={3} mb={1}>
              {item.name}
            </Heading>

            <Box mb={6} fontSize="sm">
              {item.description}
            </Box>

            <HStack height={8} mb={4}>
              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  All-time Price Low
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  {marketData.allTimeLow} USDC
                </Box>
              </Box>

              <Divider orientation="vertical" />

              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  All-time Price High
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  {marketData.allTimeHigh} USDC
                </Box>
              </Box>

              <Divider orientation="vertical" />
              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  Instant Price
                </Heading>

                <Box fontSize="lg" fontWeight="bold" color={titanColor}>
                  {price} USDC
                </Box>
              </Box>
            </HStack>

            <Divider mb={5} />

            <HStack height={8} mb={4}>
              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  Last Sold By
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  DrDoctorstein7
                </Box>
              </Box>

              <Divider orientation="vertical" />

              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  Total Volume
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  {marketData.totalVolume}
                </Box>
              </Box>

              <Divider orientation="vertical" />
              <Box width="33%" textAlign="center">
                <Heading size="sm" color="gray.500">
                  Unique Holders
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  {marketData.uniqueHolders}
                </Box>
              </Box>
            </HStack>
          </Box>

          <Box px={[0, 0, 5]}>
            <Box fontSize="2xl" fontWeight="bold" display="inline-block" float="right">
              <Countdown zeroPadDays={0} date={Date.now() + 59000} />
            </Box>

            <Box fontSize="2xl" fontWeight="bold" color="gray.500" mb={2}>
              Auction Ending:
            </Box>

            <Button
              colorScheme="purple"
              bg={btnColor}
              width="100%"
              mb={2}
              size="lg"
              color="white"
              onClick={onOpen}
            >
              Place a bid
            </Button>

            <Button
              colorScheme="purple"
              variant="outline"
              width="100%"
              size="lg"
              mb={4}
              onClick={onOpen}
            >
              Buy it now
            </Button>

            <Box my={3}>
              <Heading size="md">Daily Price Chart (USDC)</Heading>

              <HStack mb={-5}>
                <Text color="gray">Powered By Serum</Text>
                <Image
                  ml={1}
                  src="/logo-serum.png"
                  boxSize="20px"
                  loading="lazy"
                  objectFit="cover"
                />
              </HStack>

              <VictoryChart
                width={500}
                height={300}
                scale={{ x: 'linear' }}
                animate={{ duration: 400, easing: 'bounceIn' }}
                // containerComponent={
                //   <VictoryZoomContainer
                //     responsive={false}
                //     zoomDimension="x"
                //     zoomDomain={zoomDomain}
                //     onZoomDomainChange={handleZoom.bind(this)}
                //   />
                // }
                containerComponent={
                  <VictoryVoronoiContainer labels={({ datum }) => `${datum.y}`} />
                }
              >
                <VictoryAxis
                  tickFormat={(x) => {
                    return `${new Date(x).getMonth() + 1}/${new Date(x).getDate() + 1}`;
                  }}
                  style={{
                    tickLabels: { fill: axisLabelColor },
                    axis: { stroke: 'gray' },
                    // grid: { stroke: 'gray', strokeWidth: 0.5 },
                  }}
                />

                <VictoryAxis
                  dependentAxis
                  style={{
                    tickLabels: { fill: axisLabelColor },
                    axis: { stroke: 'gray' },
                    // grid: { stroke: 'gray', strokeWidth: 0.5 },
                  }}
                />

                <VictoryLine
                  style={{
                    data: { stroke: strokeColor },
                  }}
                  data={marketData.recentFills.map((fill) => {
                    return { x: new Date(fill.timestamp), y: fill.price };
                  })}
                />
              </VictoryChart>
            </Box>

            <Box>
              <Heading size="md" mb={-5}>
                Monthly Titan Activity Index
              </Heading>

              <VictoryChart
                width={450}
                height={180}
                scale={{ x: 'time' }}
                animate={{ duration: 500, easing: 'bounceIn' }}
                // padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                // containerComponent={
                //   <VictoryBrushContainer
                //     responsive={false}
                //     brushDimension="x"
                //     brushDomain={selectedDomain}
                //     onBrushDomainChange={handleBrush.bind(this)}
                //   />
                // }
                containerComponent={
                  <VictoryVoronoiContainer labels={({ datum }) => `${datum.y}`} />
                }
              >
                <VictoryAxis
                  style={{
                    tickLabels: { fill: axisLabelColor },
                    axis: { stroke: 'gray' },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    tickLabels: { fill: axisLabelColor },
                    axis: { stroke: 'gray' },
                  }}
                />
                <VictoryLine
                  style={{
                    data: { stroke: selectedStrokeColor },
                  }}
                  data={[
                    { x: 'Mar', y: 125 },
                    { x: 'Apr', y: 257 },
                    { x: 'May', y: 345 },
                    { x: 'Jun', y: 615 },
                    { x: 'Jul', y: 132 },
                    { x: 'Aug', y: 305 },
                    { x: 'Sep', y: 270 },
                    { x: 'Oct', y: 450 },
                  ]}
                />
              </VictoryChart>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>{modalContent()}</ModalBody>

          <ModalFooter>{modalButtons()}</ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const markets = await getAllStarAtlasMarkets();
  const item = markets.find((item) => item._id === id);
  if (!item) return { props: { id: id } };
  const marketData = await getMarketData(item.markets[0]?.id);

  return {
    props: {
      id: id,
      item: item,
      marketData: marketData,
    },
  };
}

export default Page;
