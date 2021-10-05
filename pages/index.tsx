import {
  Box,
  Button,
  Flex,
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
import { useState } from 'react';
import { HiOutlineSun } from 'react-icons/hi';
import Footer from '../components/footer';
import HomeButton from '../components/home-button';
import siteStore from '../stores/site';

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();

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

  return (
    <>
      <Flex>
        <HomeButton />
        <Spacer />
        <Box p={5}>
          <IconButton
            aria-label="colorscheme"
            fontSize="lg"
            variant="ghost"
            onClick={toggleColorMode}
          >
            <Icon as={HiOutlineSun} />
          </IconButton>
        </Box>
      </Flex>

      <Hero
        title="Project Titan"
        subtitle="Dominate with insights to the metaverse"
        image="/design-mock-splash.png"
        ctaLink="/dashboard"
        ctaText="Enter the App"
        bodyText="The NFT analytics portal for gamers and traders"
      />

      <HStack align="center" justify={{ base: 'center', md: 'center', xl: 'center' }} mb={10}>
        <Heading as="h1" size="lg" color="primary.800" textAlign="center">
          Gain the edge in the biggest gaming worlds on
        </Heading>
        <Box align="center">
          <Image src="/solana.svg" width="200px" objectFit="cover" />
        </Box>
      </HStack>

      <HStack
        align="center"
        justify={{ base: 'center', md: 'center', xl: 'center' }}
        spacing="15px"
        mb={10}
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
