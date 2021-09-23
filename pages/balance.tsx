import type { NextPage } from 'next'
// import Image from 'next/image'
import Layout from "../components/layout";
import { Box, Image, Heading,   } from "@chakra-ui/react";



const Home: NextPage = () => {
  return (
    <Layout title="Balance">

      <Box p={ 5 }>
        <Heading fontWeight="bold" textTransform="uppercase" size="lg">
        Balance
        </Heading>
      </Box>

    
    </Layout>
  )
}

export default Home
