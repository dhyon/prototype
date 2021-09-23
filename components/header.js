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

import { HiOutlineSun } from 'react-icons/hi';
function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box px={5} py={3} >
      <Link href="/">
      <Grid templateColumns="40px 80px" gap="15px" display="inline-grid" cursor="pointer">
        <Box rounded="full" bg="black" height="40px" width="40px" rounded="full" overflow="hidden">
          <Image src="/logo.png" objectFit="cover" />
        </Box>

        <Box>
          <Center height="100%">
            <Heading fontWeight="900" fontSize="28px" letterSpacing={'2px'}>
              TITAN
            </Heading>
          </Center>
        </Box>
      </Grid>
      </Link>

      <Box p={5}>
        <SidebarElement
          link="/games"
          icon={<Image src="/header/all-games.svg" />}
          title="All games"
        />

        <Divider my={4} />

        <SidebarElement
          link="/dashboard"
          icon={<Image src="/header/dashboard.svg" />}
          title="Dashboard"
        />

        <SidebarElement
          link="/inventory"
          icon={<Image src="/header/dashboard.svg" />}
          title="Inventory"
        />

        <SidebarElement
          link="/history"
          icon={<Image src="/header/dashboard.svg" />}
          title="History"
        />

        <SidebarElement link="/games" icon={<Image src="/header/dashboard.svg" />} title="Games" />

        <Divider my={ 4 } />

        <Heading fontSize="18px" textTransform="uppercase" mb={4}>
          My games
        </Heading>


        <GameElement link="/games" icon={<Image src="/header/dashboard.svg" />} title="My Game" />
        <GameElement link="/games" icon={<Image src="/header/dashboard.svg" />} title="My Game" />


        <Box mt={ 5 }>
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
        {/* <Box>{icon}</Box> */}

        <Box>{title}</Box>
      </HStack>
    </Link>
    </Box>
  );
}



function GameElement ({ icon, title, link }) {
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
        {/* <Box>{icon}</Box> */}

        <Box>{title}</Box>
      </HStack>
    </Link>
    </Box>
  );
}
