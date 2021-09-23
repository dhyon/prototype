import { useColorModeValue, Box, Input, Image, Center, Grid } from '@chakra-ui/react';

function PageHeader() {
  const bg = useColorModeValue('white', 'gray.800');
  const inputBg = useColorModeValue('gray.50', 'gray.700');
  return (
    <Box px={5} py={3} position="fixed" top={0} zIndex={500} width="100%" bg={bg}>
      <Input maxWidth="500px" bg={ inputBg } />
    </Box>
  );
}

export default PageHeader;
