import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Link as ChakraLink,
  MenuDivider,
  useColorModeValue,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  IconButton, 
} from '@chakra-ui/react';

import { HiChevronDown, HiSearch, HiOutlineBell } from 'react-icons/hi';
function PageHeader() {
  const bg = useColorModeValue('white', 'gray.800');
  const inputBg = useColorModeValue('white', 'gray.700');
  const linkColors = useColorModeValue('gray.700', 'gray.400');
  return (
    <Box px={5} py={3} position="fixed" top={0} zIndex={500} width="100%" bg={bg}>
      <InputGroup mr={4} maxWidth="500px" bg={inputBg} size="lg" display="inline-block">
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<HiSearch />}
        />
        <Input
          _placeholder={{ fontSize: 'sm' }}
          placeholder="Search items, sales history, and more..."
        />
        <InputRightElement
          width="150px"
          children={
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
          }
        />
      </InputGroup>

      <HStack display="inline-flex" mx={8} spacing={8} color={ linkColors }>
        <Box>
          <ChakraLink rounded="sm" href="#">Trends</ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">Sales</ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">Inbox</ChakraLink>
        </Box>

        <Box>
          <ChakraLink rounded="sm" href="#">More</ChakraLink>
        </Box>
      </HStack>

      <Box display="inline-block" ml={8}>
        <IconButton variant="outline" rounded="full">
        <HiOutlineBell />
        </IconButton>

      </Box>
    </Box>
  );
}

export default PageHeader;
