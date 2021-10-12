// import type { NextPage } from 'next';
// import Image from 'next/image'
import NextLink from "next/link";
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
  Link as ChakraLink, 
  Heading,
  HStack,
  useColorModeValue,
  Tooltip,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalFooter, 
} from '@chakra-ui/react';
import { getAllStarAtlasMarkets } from '../api/data/staratlas/markets';
import { getMarketData } from '../api/data/staratlas/markets/[marketId]';
import { useState } from 'react';

const Page = ({ item = {}, marketData = {}, id }) => {
  // TODO: if item/marketData are undefined/null then we should gracefully display an error message
  // let bg = useColorModeValue('green.200', 'red.500')
  console.log( marketData );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [zoomDomain, setZoomDomain] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [price, setPrice] = useState((Math.random() * 100).toFixed(2));
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

  function buyNow () {
    setIsDisabled(true )

    setTimeout(setBought,  1000)
  }
  
  function setBought () {
    setIsDisabled(false )
    setIsBought(true )
  }

  function modalContent () {
    if (isBought) {
      return <Box>
        <Heading size="lg" my={2}>Congradulations!</Heading>

        <Box mb={2}>
          You have successfully purchased: <ChakraLink fontWeight="bold">{ item.name }</ChakraLink>.
        </Box>

        <Box >
          You can now find your item in your inventory. 
        </Box>
      </Box>
    } else {
      return <Box>
      <Heading size="lg" mb={2}>{item.name}</Heading>
      <Box mb={2}>
        { item.description }
      </Box>


      <Heading size="md">
        {price} USDC
      </Heading>
      </Box>
    }
  }

  function modalButtons () {
    if ( isBought ) {
      return <HStack>
        
            <Button colorScheme="gray" variant="outline" size="sm" onClick={ onClose } >
              CLOSE

            </Button>


            <NextLink href="/inventory">
            <Button  colorScheme="orange" variant="outline" size="sm" >
              GO TO INVENTORY
            </Button>
            </NextLink>

            </HStack>
    } else {
      return <HStack>
          <Button colorScheme="orange" variant="outline" size="sm"  onClick={ onClose } isLoading={isDisabled}>
              CANCEL

            </Button>

            <Button colorScheme="blue" size="sm" variant="outline" isLoading={ isDisabled }>
              PLACE BID
            </Button>


            <Button colorScheme="green" size="sm" onClick={ buyNow } isLoading={ isDisabled }>
              BUY NOW
            </Button>
      </HStack>
    }
    
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

            <HStack height={8} mb={3}>
              <Box width="33%" textAlign="center">

              <Heading size="sm" color="gray.500">
                  Instant price
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  { price } USDC
                </Box>


            

                
              </Box>

              <Divider orientation="vertical" />

              <Box width="33%" textAlign="center">
              <Heading size="sm" color="gray.500">
                  Price high
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                { marketData.allTimeHigh } USDC
                </Box>

              </Box>

              <Divider orientation="vertical" />
              <Box width="33%" textAlign="center">

              <Heading size="sm" color="gray.500">
                  Price low
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  { marketData.allTimeLow } USDC
                </Box>
               
              </Box>
            </HStack>

            <Divider mb={4} />



            <HStack height={8} >
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
                  Total volume
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                { marketData.totalVolume }
                </Box>

              </Box>

              <Divider orientation="vertical" />
              <Box width="33%" textAlign="center">

              <Heading size="sm" color="gray.500">
              Unique holders
                </Heading>

                <Box fontSize="lg" fontWeight="bold">
                  { marketData.uniqueHolders }
                </Box>
               
              </Box>
            </HStack>
          </Box>

          <Box px={[0, 0, 5]}>
          <Box fontSize="2xl" fontWeight="bold" display="inline-block" float="right">
                  <Countdown zeroPadDays={0} date={Date.now() + 59000} />
                </Box>

              <Heading size="md" color="gray.500" mb={5}>
                  Aunction ends:
                </Heading>

              


            <Button
              colorScheme="purpe"
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
              colorScheme="purpe"
              variant="outline"
              width="100%"
              size="lg"
              mb={4}
              onClick={onOpen}
            >
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>

            { modalContent() }
        
          
          </ModalBody>

          <ModalFooter>

            { modalButtons() }
        
          </ModalFooter>
        </ModalContent>
      </Modal>
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
