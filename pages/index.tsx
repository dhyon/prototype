import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Spinner,
  Flex,
  Stack,
  Link,
  chakra,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GiTrade, GiConwayLifeGlider } from 'react-icons/gi';
import { MdInsights } from 'react-icons/md';
import Wallet from '../stores/wallet';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const features = [
  {
    Icon: MdInsights,
    label: 'Game market insights',
  },
  {
    Icon: GiTrade,
    label: 'NFT trading',
  },
  {
    Icon: GiConwayLifeGlider,
    label: 'In-game strategy',
  },
];

const socialIcons = [
  { Icon: FaTwitter, href: '' },
  { Icon: FaYoutube, href: '' },
  { Icon: FaInstagram, href: '' },
  { Icon: FaFacebook, href: '' },
  { Icon: FaGithub, href: 'https://github.com/dhyon/prototype' },
];

const Home: NextPage = () => {
  const router = useRouter();
  const [first, setFirst] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleWalletConnection, setConnectedFalse } = Wallet((state) => state);

  function enterDashboard() {
    toggleWalletConnection();
    onOpen();
    setTimeout(goToDashboard, 750);
  }

  function goToDashboard() {
    router.push('/dashboard');
  }

  useEffect(() => {
    first && setConnectedFalse();
    setFirst(false);
  }, []);

  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      height="100vh"
      background="radial-gradient(circle, rgba(0,0,0,1) 35%, #290457 69%)"
    >
      <Flex justifyContent="space-between" width="100%" padding="40px">
        <Heading as="h1" color="white" textAlign="center">
          Titan Analytics
        </Heading>
        <Button
          cursor="pointer"
          onClick={enterDashboard}
          bg="#d548bf"
          color="white"
          rounded="full"
          size="lg"
          textTransform="uppercase"
          _hover={{ opacity: 0.9 }}
        >
          Connect Wallet
        </Button>
      </Flex>

      <Flex flex={1} marginTop="40px" width="100%">
        <Flex flex={1} flexDirection="column" paddingLeft="40px" marginRight="100px">
          <Heading as="h2" color="white" fontWeight="400" fontSize="50px">
            Dominate with insights into the metaverse
          </Heading>
          <Features />
        </Flex>
        <Flex flex={1} alignItems="flex-start" justifyContent="flex-end">
          <Image src={'/frame_generic_dark_short.png'} alt="App screenshot" />
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          verticalAlign="center"
          pt="30vh"
          bg="none"
          shadow="none"
          zIndex="100000"
          textAlign="center"
        >
          <Spinner color="white" size="xl" fontWeight="bold" margin="0 auto" />
        </ModalContent>
      </Modal>

      <SocialLinks />
    </Flex>
  );
};

function Features() {
  return (
    <Box marginTop="40px">
      {features.map(({ Icon, label }) => {
        return (
          <Flex key={label} alignItems="center" marginTop="20px">
            <Center
              background="rgba(188, 76, 172, 0.9)"
              width="60px"
              height="60px"
              borderRadius="50%"
              padding="10px"
            >
              <Icon size="30px" color="white" />
            </Center>
            <Text fontSize="32px" marginLeft="20px" color="#ededed">
              {label}
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
}

function SocialLinks() {
  return (
    <Stack direction={'row'} spacing={4} alignSelf="flex-end" margin="0 10px 10px 0">
      {socialIcons.map(({ Icon, href }, index) => (
        <chakra.button key={index} href={href} as="a">
          <Icon size="30px" color="#ffffff63" />
        </chakra.button>
      ))}
    </Stack>
  );
}

export default Home;
