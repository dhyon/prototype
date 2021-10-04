import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import { Center, useColorModeValue, Grid, Box, Image, Heading, SimpleGrid, Flex } from '@chakra-ui/react';

const Home: NextPage = () => {
  let cardBackground = useColorModeValue('gray.100', 'gray.700');
  let colorTitan = useColorModeValue('titan', 'titanLight');
  let sidebarBg = useColorModeValue('"gray.50"', 'gray.900');
  let temperatureLight = useColorModeValue('.400', '.300');
  let temperatureDark = useColorModeValue('.600', '.600');
  return (
    <Layout title="Dashboard">
      <Box >
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

        <Grid templateColumns={['100% 100%', '100% 100%', '100% 100%', "100% 100%", 'calc(100% - 256px) 256px']}>
          <Box p={5}>
            <SimpleGrid columns={[1, 2, 3]} spacing={[4, 4, 5]} mb={[4, 4, 5]}>
              <Box height="120px" bg={cardBackground}  rounded="md" p={1}>
                <Center height="100%">
                  <Box textAlign="center">
                  <Heading fontSize={30}>
                  483,167
                  </Heading>

                  <Box color={ colorTitan } fontWeight="bold" fontSize="sm">
                    Total volume / Solana
                  </Box>
                  </Box>
                </Center>
              </Box>
              <Box height="120px"  bg={cardBackground}  rounded="md" p={1}>
              <Center height="100%">
              <Box textAlign="center">
                  <Heading fontSize={30}>
                  Pearce X5
                  </Heading>

                  <Box color={ colorTitan } fontWeight="bold" fontSize="sm">
                  Most sold item — 90d trailing
                  </Box>
                  </Box>
                  
                </Center>
              </Box>
              <Box height="120px" bg={cardBackground} rounded="md" p={1}>
              <Center height="100%">
              <Box textAlign="center">
                  <Heading fontSize={30} >
                  21,589
                  </Heading>

                  <Box color={colorTitan} fontWeight="bold" fontSize="sm">
                    Yesterday’s volume / Solana
                  </Box>
                  </Box>
                </Center>
              </Box>
            </SimpleGrid>

            <Flex gridGap={[4, 4, 5]} mb={[4, 4, 5]}>
              <Box flex={2}  bg={cardBackground} rounded="md"  p={ 5 }>
                <Box height="100%" overflow="hidden">
              <Heading fontSize={"lg"} >
              Volume by Game
                  </Heading>

                  <Heading fontSize={"md"} color="gray.500" fontWeight='500' mb={4}>
                  Leading SOL sales volume per game week/week
                  </Heading>

                  <Box height="100%" bg="green.500" rounded="md">
                    </Box>
                    </Box>

              </Box>

              <Box flex={1}  bg={cardBackground} rounded="md" p={5}>
              <Heading fontSize={"lg"} >
                Sales by DEX
                  </Heading>

                  <Heading fontSize={"md"} color="gray.500" fontWeight='500' mb={4}>
                  Monthly game sales/DEX
                  </Heading>

                  <Box rounded="md" overflow="hidden">

                  <Box px={3} py={2} color="white" fontSize="sm" fontWeight="bold" display="flex" bgGradient={`linear(to-r, blue${temperatureLight}, blue${temperatureDark})`}>
                  
                    <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end" >
                        Serum
                    </Box>
                  </Box>

                  <Box px={3} py={2} color="white" width="calc(100% - 20px)" fontSize="sm" fontWeight="bold" display="flex" bgGradient={`linear(to-r, green${temperatureLight}, green${temperatureDark})`}>
                  <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end" >
                      
                        Orca
                      
                    </Box>
                  </Box>

                  <Box px={3} py={2} color="white"  width="calc(100% - 40px)"  fontSize="sm" fontWeight="bold" display="flex" bgGradient={`linear(to-r, red${temperatureLight}, red${temperatureDark})`}>
                  <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end" >
                        Terra
                    </Box>
                  </Box>


                  <Box px={3} py={2} color="white"  width="calc(100% - 60px)"  fontSize="sm" fontWeight="bold" display="flex" bgGradient={`linear(to-r, yellow${temperatureLight}, yellow${temperatureDark})`}>
                  <Box flex={1} color="gray.900">
                      77k
                    </Box>

                    <Box alignSelf="flex-end" >
                        Luna
                    </Box>
                  </Box>


                  </Box>

                  

              </Box>
            </Flex>

            <SimpleGrid columns={[1, 1, 2]} spacing={[4, 4, 5]}>
              <Box bg={cardBackground} rounded="md" p={5}>
              <Heading fontSize={"lg"} mb={4}>
              Monthly earnings
                  </Heading>

                  <Box height="400px" bg="orange.500" rounded="md">
                  </Box>

              </Box>

              <Box bg={cardBackground} rounded="md" p={5}>
              <Heading fontSize={"lg"} mb={5}>
              Volume by Game
                  </Heading>

                  <Box height="400px" bg="purple.500" rounded="md">
                  </Box>
              </Box>
            </SimpleGrid>
          </Box>
          <Box borderLeftWidth={1} gridRow={[2, 2, 2, 1]} gridColumn={[1, 1, 1, 2]}  bg={ sidebarBg }>
          <Heading fontSize={"lg"} p={5 }  borderBottomWidth={1}>
              Volume by Game
          </Heading>

          <Box borderBottomWidth={1} px={5} py={3}>
            asdf
            </Box>


            <Box borderBottomWidth={1} px={5} py={3}>
            asdf
            </Box>

            <Box borderBottomWidth={1} px={5} py={3}>
            asdf
            </Box>

            <Box borderBottomWidth={1} px={5} py={3}>
            asdf
            </Box>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
