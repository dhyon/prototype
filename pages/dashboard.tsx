import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import {
  Center,
  useColorModeValue,
  Grid,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';
const Home: NextPage = () => {
  let cardBackground = useColorModeValue('gray.100', 'gray.700');
  let normalBg = useColorModeValue('white', 'gray.800');
  let lightBg = useColorModeValue('gray.50', 'gray.700');
  let colorTitan = useColorModeValue('titan', 'titanLight');
  let sidebarBg = useColorModeValue('"gray.50"', 'gray.900');
  let temperatureLight = useColorModeValue('.400', '.300');
  let temperatureDark = useColorModeValue('.600', '.600');
  let statsBg = useColorModeValue('gray.300', 'gray.600');
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
          <Box p={5}>
            <SimpleGrid columns={[1, 2, 3]} spacing={[4, 4, 5]} mb={[4, 4, 5]}>
              <Box height="120px" bg={cardBackground} rounded="md" p={1}>
                <Center height="100%">
                  <Box textAlign="center">
                    <Heading fontSize={30}>483,167</Heading>

                    <Box color={colorTitan} fontWeight="500" fontSize="sm">
                      Total volume / Solana
                    </Box>
                  </Box>
                </Center>
              </Box>
              <Box height="120px" bg={cardBackground} rounded="md" p={1}>
                <Center height="100%">
                  <Box textAlign="center">
                    <Heading fontSize={30}>Pearce X5</Heading>

                    <Box color={colorTitan} fontWeight="500" fontSize="sm">
                      Most sold item — 90d trailing
                    </Box>
                  </Box>
                </Center>
              </Box>
              <Box height="120px" bg={cardBackground} rounded="md" p={1}>
                <Center height="100%">
                  <Box textAlign="center">
                    <Heading fontSize={30}>21,589</Heading>

                    <Box color={colorTitan} fontWeight="500" fontSize="sm">
                      Yesterday’s volume / Solana
                    </Box>
                  </Box>
                </Center>
              </Box>
            </SimpleGrid>

            <Flex gridGap={[4, 4, 5]} mb={[4, 4, 5]}>
              <Box flex={2} bg={cardBackground} rounded="md" p={5}>
                <Box height="100%" overflow="hidden">
                  <Heading fontSize={'lg'}>Volume by Game</Heading>

                  <Heading fontSize={'md'} color="gray.500" fontWeight="500" mb={4}>
                    Leading SOL sales volume per game week/week
                  </Heading>

                  <Box height="100%" bg="green.500" rounded="md"></Box>
                </Box>
              </Box>

              <Box flex={1} bg={cardBackground} rounded="md" p={5}>
                <Heading fontSize={'lg'}>Sales by DEX</Heading>

                <Heading fontSize={'md'} color="gray.500" fontWeight="500" mb={4}>
                  Monthly game sales/DEX
                </Heading>

                <Box rounded="md" overflow="hidden" bg={statsBg}>
                  <Box
                    px={3}
                    py={2}
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end">Serum</Box>
                  </Box>

                  <Box
                    px={3}
                    py={2}
                    color="white"
                    width="calc(100% - 20px)"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end">Orca</Box>
                  </Box>

                  <Box
                    px={3}
                    py={2}
                    color="white"
                    width="calc(100% - 40px)"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end">Terra</Box>
                  </Box>

                  <Box
                    px={3}
                    py={2}
                    color="white"
                    width="calc(100% - 60px)"
                    fontSize="sm"
                    fontWeight="bold"
                    display="flex"
                    bgGradient={`linear(to-r, purple${temperatureLight}, purple${temperatureDark})`}
                  >
                    <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end">Luna</Box>
                  </Box>
                </Box>
              </Box>
            </Flex>

            <SimpleGrid columns={[1, 1, 2]} spacing={[4, 4, 5]}>
              <Box bg={cardBackground} rounded="md" >
                <Heading fontSize={'lg'}p={5} pb={0}>
                  Monthly earnings
                </Heading>

                <Box p={5}>
                  <Box bg={ normalBg } height="400px" rounded="md">
                    </Box>
                </Box>
              </Box>

              <Box bg={cardBackground} rounded="md">

                <Heading fontSize={'lg'}p={5} pb={0}>
                Volume by Game
                </Heading>

                <Box p={5}>
                  <Box bg={ normalBg } height="400px" rounded="md">
                    </Box>
                </Box>

              </Box>
            </SimpleGrid>
          </Box>
          <Box borderLeftWidth={1} gridRow={[2, 2, 2, 1]} gridColumn={[1, 1, 1, 2]} bg={sidebarBg}>
            <Heading fontSize={'lg'} p={5} borderBottomWidth={1}>
              Recently sold items
            </Heading>

            {[1, 2, 3, 4, 6].map((el) => {
              return (
                <Box
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
                        <Heading size="sm">Calico Gaurdian</Heading>

                        <Box color="gray.500" fontSize="sm">
                          Ship • 18.84 SOL
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

            <Box p={ 5 } >
              <Box height="320px" borderWidth={1} rounded="md">
              </Box>

            </Box>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
