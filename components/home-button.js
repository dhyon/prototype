
import {
	Box, 
	Grid, 
	Image, 
	Heading,
	Center, 
} from "@chakra-ui/react";


function HomeButton() {
  return (
    <Grid templateColumns="40px 80px" gap="15px">
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
  );
}


export default HomeButton;