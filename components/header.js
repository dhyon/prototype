import { LoremIpsum } from 'react-lorem-ipsum';
import site from "../stores/site";

import {
  Divider,
  useColorModeValue,
  useColorMode,
  IconButton,
  useDisclosure, 
  Icon,
  HStack,
  Box,
  Heading,
  Image,
  Center,
  Grid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import HomeButton from './home-button';

import {
  HiOutlineSun,
  HiOutlineTrendingUp,
  HiOutlineChartSquareBar,
  HiOutlineCollection,
  HiOutlineDocumentText,
  HiOutlinePlay,
} from 'react-icons/hi';
function Header() {
  const state =  site(state => state);
  const { toggleColorMode } = useColorMode();
  // const dashboardIcon = useColorModeValue("/icons/dashboard-light.svg", "/icons/dashboard-dark.svg" )
  // const inventoryIcon = useColorModeValue("/icons/inventory-light.svg", "/icons/inventory-dark.svg" )
  const bg = useColorModeValue('gray.50', 'gray.900');
  let myGame = state.data[0]
  return (
    <Box
      px={5}
      py={5}
      position="fixed"
      width="256px"
      shadow="md"
      borderLeft={1}
      minH="100vh"
      bg={bg}
      zIndex={1000}
    >
      <HomeButton />

      <Box p={3} mt={2}>
        <SidebarElement link="/games" icon={<HiOutlineTrendingUp />} title="All games" />

        <Divider my={4} />

        <SidebarElement link="/dashboard" icon={ <HiOutlineChartSquareBar /> } title="Dashboard" />

        <SidebarElement link="/inventory" icon={<HiOutlineCollection /> } title="Inventory" />

        <SidebarElement link="/history" icon={<HiOutlineDocumentText />} title="History" />

        <SidebarElement link="/games" icon={<HiOutlinePlay />} title="Games" />

        <Divider my={4} />

        <Heading fontSize="18px" textTransform="uppercase" mb={4}>
          My games
        </Heading>

        
        <GameElement link={"/game/" + myGame["_id"] } icon={<HiOutlineSun />} title={ myGame.name } />
        

        <Box mt={5}>
          <AddMore />
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
  const color = useColorModeValue('gray.900', 'gray.200');

  return (
    <Box my={0.5}>
      <Link href={link}>
        <HStack
          height="100%"
          cursor="pointer"
          color={ color }
          transition="0.1s ease"
          _hover={{ bg: hoverBg, color: hoverColor }}
          p={4}
          rounded="lg"
        >
          <Box >{icon}</Box>

          <Box>{title}</Box>
        </HStack>
      </Link>
    </Box>
  );
}

function GameElement({ icon, title, link }) {
  const hoverBg = useColorModeValue('gray.200', 'gray.600');
  const hoverColor = useColorModeValue('gray.600', 'gray.100');
  const color = useColorModeValue('gray.900', 'gray.200');

  return (
    <Box my={0.5}>
      <Link href={link}>
        <HStack
          height="100%"
          cursor="pointer"
          transition="0.1s ease"
          color={ color }
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


const AddMore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
       <Button variant="outline" onClick={onOpen} colorScheme="gray" size="lg" width="100%" py={8}>
            Add more
          </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p={ 4 }>
            <ModalHeader>Add game</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <LoremIpsum />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="outline" colorScheme="green">Add game</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}



