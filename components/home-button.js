
import Link from "next/link"
import {
	Box, 
	Grid, 
	Image, 
	Heading,
	Center, 
} from "@chakra-ui/react";


function HomeButton() {
  return (
    <Link href="/">
    <Grid templateColumns="40px 80px" gap="15px" cursor="pointer">
      <Box height="40px" width="40px" rounded="full" overflow="hidden">
        <Image src="/titan-logo.png" objectFit="cover" />
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