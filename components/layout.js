import Head from 'next/head';
import Link from 'next/link';
import {
  Stack,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerFooter,
  Heading,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Grid,
  useColorMode,
  useColorModeValue,
  IconButton,
  Icon,
  Flex,
} from '@chakra-ui/react';
import Header from '../components/header';
import Footer from '../components/footer';
import PageHeader from '../components/page-header';
import HomeButton from '../components/home-button';
import { useRef } from 'react';

import { HiOutlineSun, HiChevronUp } from 'react-icons/hi';

function Layout({ children, title }) {
  const { toggleColorMode } = useColorMode();
  const mobileHeaderBg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  // useEffect(() => {
  //   // resize script for mobile browser resize
  //   function setResize() {
  //     window.addEventListener("resize", () => {
  //       // We execute the same script as before
  //       let vh = window.innerHeight * 0.01;
  //       document.documentElement.style.setProperty("--vh", `${vh}px`);
  //     });
  //   }

  //   setResize();
  // }, []);

  return (
    <div>
      <Head>
        <title>{title || 'Titan App'}</title>
      </Head>

      <Grid templateColumns={['100%', '100%', '256px calc(100% - 256px)']}>
        <Box display={['none', 'none', 'block']} position="relative">
          <Header />
        </Box>

        <Box>
          <Box position="relative">
            <PageHeader />
          </Box>

          <Box pt={['72px']} minHeight="100vh" display="flex" flexDirection="column">
            <Flex flex={1}>{children}</Flex>
            <Footer />
          </Box>
        </Box>
      </Grid>
    </div>
  );
}

export default Layout;

function BottomsUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const linkColors = useColorModeValue('gray.700', 'gray.100');
  const bg = useColorModeValue('white', 'gray.900');

  return (
    <>
      <IconButton variant="outline" ref={btnRef} onClick={onOpen} rounded="full">
        <HiChevronUp />
      </IconButton>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} color={linkColors} mb={8}>
              <Box>
                <ChakraLink as={Link} href="/games" rounded="sm">
                  All games
                </ChakraLink>
              </Box>

              <Box>
                <ChakraLink as={Link} href="/dashboard" rounded="sm">
                  Dashboard
                </ChakraLink>
              </Box>

              <Box>
                <ChakraLink as={Link} href="/inventory" rounded="sm">
                  Inventory
                </ChakraLink>
              </Box>

              <Box>
                <ChakraLink as={Link} href="/history" rounded="sm">
                  History
                </ChakraLink>
              </Box>

              <Box>
                <ChakraLink as={Link} href="/games" rounded="sm">
                  Games
                </ChakraLink>
              </Box>
            </Stack>

            <Heading size="md">MY GAMES</Heading>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
