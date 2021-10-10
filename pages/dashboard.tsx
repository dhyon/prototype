import type { NextPage } from 'next';
import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryPolarAxis,
  VictoryArea,
  VictoryBar,
  VictoryVoronoiContainer,
  Line,
} from 'victory';
import Layout from '../components/layout';
import {
  Button,
  Center,
  useColorModeValue,
  Grid,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Flex,
  Text,
} from '@chakra-ui/react';
import { HiChevronRight, HiOutlineArrowRight } from 'react-icons/hi';
const Home: NextPage = () => {
  let cardBackground = useColorModeValue('gray.50', 'gray.700');
  let normalBg = useColorModeValue('white', 'gray.800');
  let lightBg = useColorModeValue('gray.50', 'gray.700');
  let colorTitan = useColorModeValue('titan', 'titanLight');
  let colorTitanVal = useColorModeValue('#7956DD', '#B399FF');
  let sidebarBg = useColorModeValue('"gray.50"', 'gray.900');
  let temperatureLight = useColorModeValue('.400', '.300');
  let temperatureDark = useColorModeValue('.600', '.600');
  let statsBg = useColorModeValue('gray.300', 'gray.600');
  let axisLabelColor = useColorModeValue('gray', 'white');

  const sidebarItems = [
    {
      title: 'Calico Ship',
      price: 29.73,
    },

    {
      title: 'Ogrika Thripid',
      price: 18.84,
    },

    {
      title: 'Radium Defy',
      price: 6.02,
    },

    {
      title: 'Primordial Glo',
      price: 4.3,
    },
  ];
  return (
    <Layout title="Dashboard">
      <Box>
        <Heading
          fontWeight="bold"
          textTransform="uppercase"
          as={'h1'}
          opacity="0"
          position="absolute"
          zIndex={-1}
        >
          Dashboard
        </Heading>

        <Grid
          templateColumns={[
            '100% 100%',
            '100% 100%',
            '100% 100%',
            '100% 100%',
            'calc(100% - 256px) 256px',
          ]}
        >
          <Box>
            <SimpleGrid columns={[1, 3, 3]} mb={5} borderBottomWidth={1}>
              <Box p={[5, 5, 8]} borderRightWidth={[0, 1, 1]} borderBottomWidth={[1, 0, 0]}>
                <Box textAlign="center">
                  <Heading fontSize={30}>483,167</Heading>

                  <Box color={colorTitan} fontWeight="500" fontSize="sm">
                    Total volume / Solana
                  </Box>
                </Box>
              </Box>
              <Box py={[5, 5, 8]} px={5} borderRightWidth={[0, 1, 1]} borderBottomWidth={[1, 0, 0]}>
                <Box textAlign="center">
                  <Heading fontSize={30}>Pearce X5</Heading>

                  <Box color={colorTitan} fontWeight="500" fontSize="sm">
                    Most sold item — 90d trailing
                  </Box>
                </Box>
              </Box>
              <Box p={[5, 5, 8]}>
                <Box textAlign="center">
                  <Heading fontSize={30}>21,589</Heading>

                  <Box color={colorTitan} fontWeight="500" fontSize="sm">
                    Yesterday’s volume / Solana
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>

            <Box
              display={['block', 'flex', 'flex']}
              gridGap={[5, 5, 8]}
              mb={[5]}
              pb={5}
              borderBottomWidth={1}
              px={[5]}
            >
              <Box flex={2} mb={[5, 0]}>
                <Box height="100%" overflow="hidden">
                  <Heading fontSize={'lg'}>Volume by Game</Heading>

                  <Heading fontSize={'md'} color="gray.500" fontWeight="500" mb={4}>
                    Leading sales volume per game week/week
                  </Heading>

                  <VolumeByGame />
                </Box>
              </Box>

              <Box flex={1}>
                <Heading fontSize={'lg'}>Sales by DEX</Heading>

                <Heading fontSize={'md'} color="gray.500" fontWeight="500" mb={4}>
                  Monthly game sales by DEX
                </Heading>

                <Box rounded="md" overflow="hidden">
                  <Box
                    px={3}
                    py={2}
                    height={50}
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    mb={1}
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end" fontWeight="bold">
                      Serum
                    </Box>
                  </Box>

                  <Box
                    px={3}
                    py={2}
                    mb={1}
                    height={50}
                    color="white"
                    width="calc(100% - 20px)"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      60k
                    </Box>

                    <Box alignSelf="flex-end" fontWeight="bold">
                      Orca
                    </Box>
                  </Box>

                  <Box
                    px={3}
                    py={2}
                    mb={1}
                    height={50}
                    color="white"
                    width="calc(100% - 40px)"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      42k
                    </Box>

                    <Box alignSelf="flex-end" fontWeight="bold">
                      Raydium
                    </Box>
                  </Box>

                  <Box
                    px={3}
                    py={2}
                    mb={1}
                    height={50}
                    color="white"
                    width="calc(100% - 60px)"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      35k
                    </Box>

                    <Box alignSelf="flex-end" fontWeight="bold">
                      Akash
                    </Box>
                  </Box>

                  <Box
                    px={3}
                    py={2}
                    height={50}
                    color="white"
                    width="calc(100% - 80px)"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      30k
                    </Box>

                    <Box alignSelf="flex-end">Terra</Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <SimpleGrid columns={[1, 1, 1]} spacing={[5, 5, 8]}>
              <Box borderBottomWidth={1} pl={5}>
                <Heading size="md">Portfolio Value (USDC)</Heading>
                <Heading fontSize="lg" color="gray.500" fontWeight="500" mt={2} mb={[-5, -8, -12]}>
                  ↑ Upward trends detected
                </Heading>
                <Box>
                  <MonthlyBalanceChart areaColor={colorTitanVal} axisLabelColor={axisLabelColor} />
                  <Box mb={[5, 5, 8]} textAlign="center">
                    <Button size="lg" textTransform="uppercase" rightIcon={<HiOutlineArrowRight />}>
                      Portfolio Trends
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box px={5} borderBottomWidth={[1, 1, 0]}>
                  <Heading size="md" mb={[-5, -8, -12]}>
                    Monthly Profit (USDC)
                  </Heading>
                  <Box>
                    <MonthlyEarningsChart
                      areaColor={colorTitanVal}
                      axisLabelColor={axisLabelColor}
                    />
                    <Center height="100%" mb={[5, 5, 8]}>
                      <Button
                        size="lg"
                        textTransform="uppercase"
                        rightIcon={<HiOutlineArrowRight />}
                      >
                        Balance
                      </Button>
                    </Center>
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>

          <Box borderLeftWidth={1} gridRow={[2, 2, 2, 1]} gridColumn={[1, 1, 1, 2]} bg={sidebarBg}>
            <Heading fontSize={'lg'} p={5} borderBottomWidth={1}>
              Recently Sold Items
            </Heading>

            {sidebarItems.map((el) => {
              return (
                <Box
                  key={el.title}
                  cursor="pointer"
                  borderBottomWidth={1}
                  px={5}
                  py={3}
                  _hover={{ bg: lightBg }}
                  transition="background 0.2s ease"
                >
                  <Grid templateColumns="40px calc(100% - 55px) 15px">
                    <Box height="40px" width="40px" rounded="md" bg="gray.200"></Box>

                    <Box pl={4}>
                      <Box>
                        <Heading size="sm">{el.title}</Heading>

                        <Box color="gray.500" fontSize="sm">
                          Ship • {el.price} USDC
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <Center height="100%" color={colorTitan}>
                        <HiChevronRight />
                      </Center>
                    </Box>
                  </Grid>
                </Box>
              );
            })}

            <Heading fontSize={'lg'} p={5} borderBottomWidth={1}>
              Hot Inventory Items
            </Heading>

            {sidebarItems.map((el) => {
              return (
                <Box
                  key={el.title + '2'}
                  cursor="pointer"
                  borderBottomWidth={1}
                  px={5}
                  py={3}
                  _hover={{ bg: lightBg }}
                  transition="background 0.2s ease"
                >
                  <Grid templateColumns="40px calc(100% - 55px) 15px">
                    <Box height="40px" width="40px" rounded="md" bg="gray.200"></Box>

                    <Box pl={4}>
                      <Box>
                        <Heading size="sm">{el.title}</Heading>

                        <Box color="gray.500" fontSize="sm">
                          Ship • {el.price} USDC
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <Center height="100%" color={colorTitan}>
                        <HiChevronRight />
                      </Center>
                    </Box>
                  </Grid>
                </Box>
              );
            })}

            <Box></Box>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;

interface ChartData {
  areaColor: string;
  axisLabelColor: string;
}

function MonthlyBalanceChart({ areaColor, axisLabelColor }: ChartData) {
  const sampleData = [
    { x: 'Jan', y: 100 },
    { x: 'Feb', y: 100 },
    { x: 'Mar', y: 200 },
    { x: 'Apr', y: 300 },
    { x: 'May', y: 260 },
    { x: 'Jun', y: 600 },
    { x: 'Jul', y: 800 },
    { x: 'Aug', y: 1055 },
    { x: 'Sep', y: 922 },
    { x: 'Oct', y: 1690 },
  ];

  const sampleData2 = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 50 },
    { x: 'Mar', y: 150 },
    { x: 'Apr', y: 70 },
    { x: 'May', y: 250 },
    { x: 'Jun', y: 500 },
    { x: 'Jul', y: 800 },
    { x: 'Aug', y: 755 },
    { x: 'Sep', y: 922 },
    { x: 'Oct', y: 1290 },
  ];

  return (
    <>
      <VictoryChart
        height={250}
        animate={{ duration: 400, easing: 'bounceIn' }}
        containerComponent={<VictoryVoronoiContainer labels={({ datum }) => `${datum.y}`} />}
      >
        <VictoryArea
          data={sampleData}
          style={{
            data: { fill: '#7956DD55' },
            labels: { fill: '#7956DD' },
          }}
        />
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
        {/* <VictoryArea
          data={sampleData}
          style={{
            data: { fill: areaColor, fillOpacity: 0.5 },
          }}
        /> */}

        <VictoryArea
          data={sampleData2}
          style={{
            data: { fill: '#55555555' },
            labels: { fill: '#555555' },
          }}
        />
      </VictoryChart>
    </>
  );
}

function MonthlyEarningsChart({ areaColor, axisLabelColor }: ChartData) {
  const sampleData = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 0 },
    { x: 'Mar', y: 100 },
    { x: 'Apr', y: 100 },
    { x: 'May', y: 0 },
    { x: 'Jun', y: 340 },
    { x: 'Jul', y: 200 },
    { x: 'Aug', y: 255 },
    { x: 'Sep', y: 0 },
    { x: 'Oct', y: 368 },
  ];

  const sampleData2 = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 30 },
    { x: 'Mar', y: 50 },
    { x: 'Apr', y: 70 },
    { x: 'May', y: 80 },
    { x: 'Jun', y: 60 },
    { x: 'Jul', y: 65 },
    { x: 'Aug', y: 45 },
    { x: 'Sep', y: 95 },
    { x: 'Oct', y: 105 },
  ];

  return (
    <Box>
      <VictoryChart
        height={250}
        // theme={victoryTheme}
        animate={{ duration: 100, easing: 'bounceIn' }}
        containerComponent={<VictoryVoronoiContainer labels={({ datum }) => `${datum.y}`} />}
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
          data={sampleData}
          style={{
            data: {
              stroke: '#7956DD55',
              width: 15,
              strokeWidth: 4,
            },
          }}
        />

        <VictoryLine
          data={sampleData2}
          style={{
            data: {
              stroke: '#55555555',
              width: 15,
              strokeWidth: 4,
            },
          }}
        />
      </VictoryChart>
    </Box>
  );
}

function VolumeByGame() {
  const sampleData = [
    { gameImagePath: '/staratlas.png' },
    { color: '#B794F4', value: '1k' },
    { color: '#7956DD', value: '10k' },
    { color: '#7956DD', value: '10k' },
    { color: '#553C9A', value: '25k' },
    { color: '#44337A', value: '38k' },
    { gameImagePath: '/defiland.svg' },
    { color: '#E9D8FD', value: '' },
    { color: '#E9D8FD', value: '' },
    { color: '#B794F4', value: '2k' },
    { color: '#B794F4', value: '3k' },
    { color: '#7956DD', value: '10k' },
    { gameImagePath: '/aurory.png' },
    { color: '#E9D8FD', value: '' },
    { color: '#B794F4', value: '2k' },
    { color: '#B794F4', value: '4k' },
    { color: '#7956DD', value: '10k' },
    { color: '#6B46C1', value: '18k' },
    { blank: 'blank' },
    { label: 'Sep 6' },
    { label: 'Sep 13' },
    { label: 'Sep 20' },
    { label: 'Sep 27' },
    { label: 'Oct 4' },
  ];

  return (
    <>
      <Grid templateColumns="repeat(6,1fr)" templateRows="1fr 1fr 1fr .2fr" gap={2}>
        {sampleData.map((x) => {
          if (x.color)
            return (
              <Box bg={x.color} rounded="md">
                <Center height="100%">
                  <Text fontSize="xs" fontWeight="bold" color="white">
                    {x.value}
                  </Text>
                </Center>
              </Box>
            );
          if (x.gameImagePath)
            return (
              <Center height="100%">
                <Image src={x.gameImagePath} objectFit="cover" />
              </Center>
            );
          if (x.blank) return <Box></Box>;
          if (x.label)
            return (
              <Center height="100%">
                <Text color="gray.500">{x.label}</Text>
              </Center>
            );
        })}
      </Grid>
    </>
  );
}
