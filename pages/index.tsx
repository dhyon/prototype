import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Grid,
  Center,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Spinner,

} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { RiWallet2Line } from 'react-icons/ri';
import Footer from '../components/footer';
import IndexTrend from '../components/index-trend';
import ToggleDarkMode from '../components/toggle-dark-mode';
import Wallet from "../stores/wallet";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter()
  const [ first, setFirst ] = useState( true  )
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {toggleWalletConnection, isConnected, setConnectedFalse } = Wallet( state => state );
  const { toggleColorMode } = useColorMode();
  const solanaImg = useColorModeValue('/solana.svg', '/solana.svg');
  const lightBg = useColorModeValue('gray.200', 'gray.700');
  const bg = useColorModeValue('gray.50', 'gray.900');

  function enterDashboard () {
    toggleWalletConnection();
    onOpen();
    setTimeout(goToDashboard, 750)
  }

  function goToDashboard () {
    router.push("/dashboard")
  }

  useEffect(() => {
    first && setConnectedFalse()
    setFirst(false)
  }, [])
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
        <Center height="100%">
          <Box py={[10,10,20]}>
            <Box textAlign="center" pt={[10, 10, 16]}>
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

              <Heading size="md" color="gray.500" fontWeight="400" textAlign="center" mb={6}>
                Dominate with insights into the metaverse
              </Heading>
            </Box>

            <IndexTrend />

            <Box textAlign="center">

                <Button
                  cursor="pointer"
                  onClick={enterDashboard}
                  bg={isConnected ? 'titan' : bg}
                  color={isConnected ? "white": "inherit"}
                  rounded="full"
                  size="lg"
                  textTransform="uppercase"
                  mr={5}
                  _hover={{opacity: 0.9}}
                  rightIcon={<RiWallet2Line />}
                >
                  Connect
                </Button>

              <ToggleDarkMode />
            </Box>
          </Box>
        </Center>

      <Box py={[10, 10, 20]} bg={lightBg}>
        <Heading as="h1" size="lg" color="primary.800" textAlign="center" mb={[5]}>
          The NFT analytics portal for gamers and traders.
        </Heading>

        <Heading fontWeight="300" size="md" mb={[10, 10, 16]} textAlign="center">
          Gain the edge in the biggest gaming worlds on{' '}
          <Image ml={2} display="inline-block" src={solanaImg} width="200px" objectFit="cover" />
        </Heading>

        <HStack
          align="center"
          justify={{ base: 'center', md: 'center', xl: 'center' }}
          spacing="60px"
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

      <Modal isOpen={isOpen} onClose={onClose}>

        <ModalOverlay />
        <ModalContent verticalAlign="center" pt="30vh" bg="none" shadow="none" zIndex="100000" textAlign="center">
          <Spinner color="white" size="xl" fontWeight="bold" margin="0 auto" />
        </ModalContent>
        </Modal>


      <Footer align="center" />
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
