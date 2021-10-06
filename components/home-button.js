import Link from 'next/link';
import { Box, Grid, Image, Heading, Center, useColorModeValue } from '@chakra-ui/react';

function HomeButton() {

  let logo = useColorModeValue("/titan-logo.png", "/titan-dark.png")
  return (
    <Link href="/" >
        <Grid templateColumns="40px 80px" gap="12px" cursor="pointer" p={4}>
          <Box height="40px" width="40px" rounded="full" overflow="hidden">
            <Image src={ logo } objectFit="cover" alt="Titan Logo" />
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
  );
}

export default HomeButton;
