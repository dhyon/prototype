import type { NextPage } from 'next';
import NextLink from 'next/link';
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
  Curve,
  VictoryTooltip,
} from 'victory';
import Layout from '../components/layout';
import ScatterPlot from '../components/scatterplot';
import {
  Button,
  Center,
  useColorModeValue,
  Grid,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Spacer,
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
      image: '/ship-1.png',
      link: '/item/612e7223fee257a97be35343',
      price: 29.73,
    },

    {
      title: 'Ogrika Thripid II',
      link: '/item/612e7223fee257a97be3533e',
      image: '/ship-2.png',
      price: 18.84,
    },

    {
      title: 'Radium Defy II',
      image: '/ship-3.png',
      link: '/item/612e7223fee257a97be35354',
      price: 6.02,
    },

    {
      title: 'Primordial Vessel',
      image: '/ship-4.png',
      link: '/item/6143e0ac92761eeee4bc18f4',
      price: 14.3,
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
                    Leading sales volume per game week-over-week
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
                  <Flex
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
                    <Box color="gray.900">Serum</Box>
                    <Spacer />
                    <Box>77k</Box>
                  </Flex>

                  <Flex
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
                    <Box color="gray.900">Orca</Box>
                    <Spacer />
                    <Box>60k</Box>
                  </Flex>

                  <Flex
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
                    <Box color="gray.900">Raydium</Box>
                    <Spacer />
                    <Box>42k</Box>
                  </Flex>

                  <Flex
                    px={3}
                    py={2}
                    mb={1}
                    height={50}
                    color="white"
                    width="calc(100% - 65px)"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box color="gray.900">Solanart</Box>
                    <Spacer />
                    <Box>33k</Box>
                  </Flex>
                </Box>
              </Box>
            </Box>

            <SimpleGrid columns={[1, 1, 1]} spacing={[5, 5, 8]}>
              <Box borderBottomWidth={1}>
                <Heading ml={5} mb={-5} size="md">
                  Price vs Trend Analysis (24h)
                </Heading>
                <ScatterPlot />
              </Box>

              <Box borderBottomWidth={1} px={5}>
                <Button float="right" textTransform="uppercase" rightIcon={<HiOutlineArrowRight />}>
                  Portfolio
                </Button>

                <Heading size="md">Portfolio Value (USDC)</Heading>
                <Heading fontSize="lg" color="gray.500" fontWeight="500" mt={2} mb={[-5, -8, -12]}>
                  ↑ Upward trends detected over last 12 months
                </Heading>
                <Box>
                  <MonthlyBalanceChart areaColor={colorTitanVal} axisLabelColor={axisLabelColor} />
                </Box>
              </Box>

              <Box>
                <Box px={5} borderBottomWidth={[1, 1, 0]}>
                  <Button
                    float="right"
                    textTransform="uppercase"
                    rightIcon={<HiOutlineArrowRight />}
                  >
                    Balance
                  </Button>

                  <Heading size="md">Monthly Profit (USDC)</Heading>
                  <Heading
                    fontSize="lg"
                    color="gray.500"
                    fontWeight="500"
                    mt={2}
                    mb={[-5, -8, -12]}
                  >
                    Portfolio profit and loss month-to-month
                  </Heading>
                  <Box>
                    <MonthlyEarningsChart
                      areaColor={colorTitanVal}
                      axisLabelColor={axisLabelColor}
                    />
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>

          <Box borderLeftWidth={1} gridRow={[2, 2, 2, 1]} gridColumn={[1, 1, 1, 2]} bg={sidebarBg}>
            <Heading fontSize={'lg'} p={5} borderBottomWidth={1}>
              Top Gainers (24h)
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
                  <NextLink href={el.link}>
                    <Grid templateColumns="40px calc(100% - 55px) 15px">
                      <Box height="40px" width="40px" rounded="md" bg="gray.200">
                        <Image src={el.image} height="100%" width="100%" objectFit="cover" />
                      </Box>

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
                  </NextLink>
                </Box>
              );
            })}

            <Heading fontSize={'lg'} p={5} borderBottomWidth={1}>
              Hot Inventory Items 🔥
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
                  <NextLink href={el.link}>
                    <Grid templateColumns="40px calc(100% - 55px) 15px">
                      <Box height="40px" width="40px" rounded="md" bg="gray.200">
                        <Image src={el.image} height="100%" width="100%" objectFit="cover" />
                      </Box>

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
                  </NextLink>
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

const sampleUserData = [
  { x: 'Nov', y: 4000 },
  { x: 'Dec', y: 4000 },
  { x: 'Jan', y: 4100 },
  { x: 'Feb', y: 4200 },
  { x: 'Mar', y: 4000 },
  { x: 'Apr', y: 4200 },
  { x: 'May', y: 4300 },
  { x: 'Jun', y: 4000 },
  { x: 'Jul', y: 3800 },
  { x: 'Aug', y: 3600 },
  { x: 'Sep', y: 3700 },
  { x: 'Oct', y: 4000 },
];
const sampleUserData2 = sampleUserData.map((thing) => ({
  x: thing.x,
  y: Math.round(0.7 * thing.y),
}));
const sampleUserData3 = sampleUserData2.map((thing) => ({
  x: thing.x,
  y: Math.round(0.5 * thing.y),
}));

function MonthlyBalanceChart({ areaColor, axisLabelColor }: ChartData) {
  return (
    <>
      <VictoryChart
        height={250}
        animate={{ duration: 400, easing: 'bounceIn' }}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryBar
          data={sampleUserData}
          style={{
            data: { fill: '#7956DD' },
          }}
          labels={({ datum }) => datum.y}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ strokeWidth: 0 }}
              style={{
                fontFamily: 'Titillium Web',
                fontSize: 10,
              }}
            />
          }
        />

        {/* <VictoryBar
          data={sampleUserData2}
          style={{
            data: { fill: '#7956DD55' },
            labels: { fill: '#7956DD55' },
          }}
        />

        <VictoryBar
          data={sampleUserData3}
          style={{
            data: { fill: '#B399FF' },
            labels: { fill: '#B399FF' },
          }}
        /> */}

        <VictoryAxis
          style={{
            tickLabels: { fill: axisLabelColor, fontFamily: 'Titillium Web', fontSize: 10 },
            axis: { stroke: 'gray' },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fill: axisLabelColor, fontFamily: 'Titillium Web', fontSize: 10 },
            axis: { stroke: 'gray' },
          }}
        />
      </VictoryChart>
    </>
  );
}

function MonthlyEarningsChart({ areaColor, axisLabelColor }: ChartData) {
  function getMonthlyDiffData(data: any): Array<any> {
    let lastMonth = '';
    let lastVal = 0;
    return data.map((thing: any) => {
      if (!lastMonth) {
        lastMonth = thing.x;
        lastVal = thing.y;
        return { x: thing.x, y: 0 };
      } else {
        lastMonth = thing.x;
        let tmp = lastVal;
        lastVal = thing.y;
        return { x: thing.x, y: thing.y - tmp };
      }
    });
  }
  const sampleData = getMonthlyDiffData(sampleUserData);
  const sampleData2 = getMonthlyDiffData(sampleUserData2);
  const sampleData3 = getMonthlyDiffData(sampleUserData3);

  return (
    <Box>
      <VictoryChart
        height={350}
        animate={{ duration: 400, easing: 'bounceIn' }}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryAxis
          style={{
            tickLabels: { fill: axisLabelColor, fontFamily: 'Titillium Web', fontSize: 10 },
            axis: { stroke: 'gray' },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fill: axisLabelColor, fontFamily: 'Titillium Web', fontSize: 10 },
            axis: { stroke: 'gray' },
          }}
        />
        <VictoryLine
          data={sampleData}
          labels={({ datum }) => datum.y}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ strokeWidth: 0 }}
              style={{
                fontFamily: 'Titillium Web',
                fontSize: 10,
              }}
            />
          }
          style={{
            data: {
              stroke: '#7956DD',
              width: 15,
              strokeWidth: 3,
            },
          }}
        />
        {/* <VictoryLine
          data={sampleData2}
          style={{
            data: {
              stroke: '#7956DD55',
              width: 15,
              strokeWidth: 3,
            },
          }}
        />
        <VictoryLine
          data={sampleData3}
          style={{
            data: {
              stroke: '#B399FF',
              width: 15,
              strokeWidth: 3,
            },
          }}
        /> */}
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
                  <Text fontSize="md" fontWeight="bold" color="white">
                    {x.value}
                  </Text>
                </Center>
              </Box>
            );
          else if (x.gameImagePath)
            return (
              <Center height="100%">
                <Image src={x.gameImagePath} objectFit="cover" />
              </Center>
            );
          else if (x.blank) return <Box></Box>;
          else if (x.label)
            return (
              <Center height="100%">
                <Text color="gray.500">{x.label}</Text>
              </Center>
            );
          else return <></>;
        })}
      </Grid>
    </>
  );
}
