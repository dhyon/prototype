import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Stack,
  useDisclosure,
  Link as ChakraLink,
  MenuDivider,
  useColorModeValue,
  useColorMode,
  Box,
  Input,
  Icon,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,

} from '@chakra-ui/react';

import { useRef } from "react";

import { HiChevronDown, HiSearch, HiOutlineBell, HiMenuAlt3, HiOutlineSun } from 'react-icons/hi';
function PageHeader() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const inputBg = useColorModeValue('white', 'gray.700');
  const linkColors = useColorModeValue('gray.700', 'gray.400');
  const { toggleColorMode } = useColorMode();
  return (
    <Box px={[5, 5, 8]} py={3} position="fixed" top={0} shadow="sm" zIndex={400} bg={bg} width={["100%", "100%", "calc(100% - 256px)"]}>

      <Box float="right" display={["block", "block", "block", "block", "none"]} ml={ 2 } height="100%">
        <Sidebar />
      </Box>

      <Box float="right" ml={2}>
        <IconButton variant="outline" rounded="full">
          <HiOutlineBell />
        </IconButton>
        </Box>

      <Box float="right">
        <IconButton fontSize="lg" variant="outline" onClick={toggleColorMode}>
          <Icon as={HiOutlineSun} />
        </IconButton>
      </Box>

      <InputGroup mr={4} maxWidth={[220, 400, 400, "500px"]} bg={inputBg} size="lg" rounded="lg" display="inline-block">
        <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
          <HiSearch />
        </InputLeftElement>
        <Input
          _placeholder={{ fontSize: 'sm' }}
          placeholder="Search items, sales history, and more..."
        />
        <InputRightElement width="150px" display="none">
          <Menu>
            <MenuButton as={Button} size="md" height={9} rightIcon={<HiChevronDown />}>
              Star Atlas
            </MenuButton>
            <MenuList>
              <MenuItem>Star Atlas</MenuItem>
              <MenuItem>Star Atlas</MenuItem>
              <MenuItem>Star Atlas</MenuItem>
              <MenuDivider />
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </InputRightElement>
      </InputGroup>

      <HStack  mx={8} spacing={8} color={linkColors} display={["none", "none", "none", "none", "inline-flex"]}>
        <Box>
          <ChakraLink rounded="sm" href="#">
            Trends
          </ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">
            Sales
          </ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">
            Inbox
          </ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">
            More
          </ChakraLink>
        </Box>
      </HStack>

    </Box>
  );
}

export default PageHeader;


function Sidebar () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const linkColors = useColorModeValue('gray.700', 'gray.100');
  const bg = useColorModeValue('white', 'gray.900');

  return (
    <>
      <IconButton variant="outline" ref={btnRef}onClick={onOpen}   rounded="full">
          <HiMenuAlt3 />
        </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>

          <Stack   spacing={4} color={linkColors} >
        <Box>
          <ChakraLink rounded="sm" href="#">
            Trends
          </ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">
            Sales
          </ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">
            Inbox
          </ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">
            More
          </ChakraLink>
        </Box>
      </Stack>


          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}