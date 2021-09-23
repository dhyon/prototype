import {
  Divider,
  useColorModeValue,
  useColorMode,
  IconButton,
  Icon,
  HStack,
  Box,
  Heading,
  Image,
  Center,
  Grid,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import HomeButton from './home-button';

import { HiOutlineSun, HiOutlineTrendingUp } from 'react-icons/hi';
function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      px={5}
      py={5}
      position="fixed"
      width="256px"
      overflowY="scroll"
      overflowY="scroll"
      shadow="md"
      borderLeft={1}
      zIndex={1000}
    >
      <HomeButton />

      <Box p={3}>
        <SidebarElement link="/games" icon={<HiOutlineTrendingUp />} title="All games" />

        <Divider my={4} />

        <SidebarElement link="/dashboard" icon={<HiOutlineTrendingUp />} title="Dashboard" />

        <SidebarElement link="/inventory" icon={<HiOutlineTrendingUp />} title="Inventory" />

        <SidebarElement link="/history" icon={<HiOutlineTrendingUp />} title="History" />

        <SidebarElement link="/games" icon={<HiOutlineTrendingUp />} title="Games" />

        <Divider my={4} />

        <Heading fontSize="18px" textTransform="uppercase" mb={4}>
          My games
        </Heading>

        <GameElement link="/games" icon={<HiOutlineTrendingUp />} title="My Game" />
        <GameElement link="/games" icon={<HiOutlineTrendingUp />} title="My Game" />

        <Box mt={5}>
          <Button variant="outline" colorScheme="gray" size="lg" width="100%" py={8}>
            Add more
          </Button>
        </Box>
      </Box>

      <Box>
        <IconButton fontSize="lg" variant="ghost" onClick={toggleColorMode}>
          <Icon as={HiOutlineSun} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Header;

function SidebarElement({ icon, title, link }) {
  const hoverBg = useColorModeValue('gray.200', 'gray.600');
  const hoverColor = useColorModeValue('gray.600', 'gray.100');

  return (
    <Box my={0.5}>
      <Link href={link}>
        <HStack
          height="100%"
          cursor="pointer"
          transition="0.1s ease"
          _hover={{ bg: hoverBg, color: hoverColor }}
          p={4}
          rounded="lg"
        >
          <Box>{icon}</Box>

          <Box>{title}</Box>
        </HStack>
      </Link>
    </Box>
  );
}

function GameElement({ icon, title, link }) {
  const hoverBg = useColorModeValue('gray.200', 'gray.600');
  const hoverColor = useColorModeValue('gray.600', 'gray.100');

  return (
    <Box my={0.5}>
      <Link href={link}>
        <HStack
          height="100%"
          cursor="pointer"
          transition="0.1s ease"
          _hover={{ bg: hoverBg, color: hoverColor }}
          p={4}
          rounded="lg"
        >
          <Box>{icon}</Box>

          <Box>{title}</Box>
        </HStack>
      </Link>
    </Box>
  );
}
