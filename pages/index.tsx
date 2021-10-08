import NextLink from "next/link"
import {
  Box,
  Button,
  Flex,
  Grid,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link as ChakraLink,
  LinkBox,
  Spacer,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { HiOutlineSun } from 'react-icons/hi';
import Footer from '../components/footer';
import IndexTrend from "../components/index-trend"
import ToggleDarkMode from "../components/toggle-dark-mode"

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const solanaImg = useColorModeValue('/solana.svg', '/solana.svg');
  const lightBg = useColorModeValue('gray.200', 'gray.700');

  // let axisColor = useColorModeValue('#0a0a0a', '#fafafa');

  // let [selectedDomain, setSelectDomain] = useState({
  //   x: [new Date(1987, 1, 1), new Date(1993, 1, 1)],
  //   y: [125, 515],
  // });
  // let [zoomDomain, setZoomDomain] = useState({
  //   x: [new Date(1987, 1, 1), new Date(1993, 1, 1)],
  //   y: [125, 515],
  // });

  // function handleZoom(domain: any) {
  //   setSelectDomain(domain);
  // }

  // function handleBrush(domain: any) {
  //   setZoomDomain(domain);
  // }
  let logo = useColorModeValue('/titan-logo.png', '/titan-dark.png');
  return (
    <>


      {/* <Hero
        title="Project Titan"
        subtitle="Dominate with insights to the metaverse"
        image="/design-mock-splash.png"
        ctaLink="/dashboard"
        ctaText="Enter the App"
        bodyText="The NFT analytics portal for gamers and traders"
      /> */}
  <Box >

      <Box textAlign="center" pt={[10, 10, 16]} >
        <Box display="inline-block">
          <Link href="/">
            <Grid templateColumns="80px 160px" gap="24px" cursor="pointer" p={4}>
              <Box height="80px" width="80px" rounded="full" overflow="hidden">
                <Image src={logo} objectFit="cover" alt="Titan Logo" />
              </Box>

              <Box>
                <Center height="100%">
                  <Heading fontWeight="900" fontSize="58px" letterSpacing={'4px'}>
                    TITAN
                  </Heading>
                </Center>
              </Box>
            </Grid>
          </Link>
        </Box>



        <Heading size="md" color="gray.500" fontWeight="400" textAlign="center" mb={6} >
          Dominate with insights into the metaverse
        </Heading>
      </Box>

      <IndexTrend />

      <Box textAlign="center" pb={[10, 10, 16]}>
        <NextLink href="/dashboard">
        <Button colorScheme="gray" size="lg" textTransform="uppercase" mr={5}>
          Enter
        </Button>
        </NextLink>

        <ToggleDarkMode />
      </Box>

  </Box>


      <Box py={[10, 10, 20]} bg={ lightBg } >

      <Heading as="h1" size="lg" color="primary.800" textAlign="center" mb={[5,]}>
          The NFT analytics portal for gamers and traders.
          </Heading>


      <Heading fontWeight="300" size="md" mb={[10, 10, 16]} textAlign="center">
      Gain the edge in the biggest gaming worlds on <Image ml={2} display="inline-block" src={solanaImg} width="200px" objectFit="cover" />

      </Heading>

        <HStack
          align="center"
          justify={{ base: 'center', md: 'center', xl: 'center' }}
          spacing="20px"
        >
          <ChakraLink href="https://staratlas.com/">
            <Tooltip label="Star Atlas">
              <Image src="/staratlas.png" boxSize="100px" objectFit="cover" />
            </Tooltip>
          </ChakraLink>
          <ChakraLink href="https://defiland.app/en">
            <Tooltip label="DeFi Land">
              <Image src="/defiland.svg" height="100px" objectFit="cover" />
            </Tooltip>
          </ChakraLink>
          <ChakraLink href="https://app.aurory.io/litepaper">
            <Tooltip label="Aurory">
              <Image src="/aurory.png" height="100px" objectFit="cover" />
            </Tooltip>
          </ChakraLink>
        </HStack>
      </Box>

      <Footer />
    </>
  );
};

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaLink: string;
  ctaText: string;
  bodyText: string;
}

function Hero({ title, subtitle, image, ctaLink, ctaText, bodyText, ...rest }: HeroProps) {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'center', xl: 'center' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="nowrap"
      minH="50vh"
      px={16}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={6}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <Link href={ctaLink}>
          <Button
            align="right"
            colorScheme="purple"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            variant="solid"
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize="s"
          mt={2}
          textAlign={['center', 'center', 'left', 'left']}
          color="primary.800"
          opacity="0.6"
        >
          {bodyText}
        </Text>
      </Stack>

      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="dark-lg" />
      </Box>
    </Flex>
  );
}

export default Home;
