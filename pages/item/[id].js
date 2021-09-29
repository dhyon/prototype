// import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../../components/layout';
import { Box, Image, Heading, useColorModeValue } from '@chakra-ui/react';

const Page = ({ item = {} }) => {
  // let bg = useColorModeValue('green.200', 'red.500');
  
  return (
    <Layout title={ item.name }>
      <Box position="relative" > 
        <Image
          src={item.image || '#'}
          width="100%"
          height={[200, 300, '400px']}
          loading="lazy"
          objectFit="cover"
        />



        <Box position="absolute" p={[10, 10, 20]} px={[8, 8, 10]} bottom={0} >
          <Heading color="white" size="4xl" >
            {item.name}
          </Heading>

          <Heading color="gray.500" size="lg">
            {item.symbol}
          </Heading>
        </Box>
      </Box>

      {/* Victory Chart */}
      {/* /item/asdfakjsndfkjandsf/movement */}

      <Box p={[5, 5, 10]}>{item.description}</Box>
    </Layout>
  );
};

export default Page;

export async function getStaticPaths() {
  let apiCall = await fetch('http://localhost:3000/api/data/staratlas/markets');
  let data = await apiCall.json();

  const paths = data.map((el, idx) => {
    return {
      params: {
        id: el['_id'],
        data: el,

        // handle: el["_id"],
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params, locale, locales, preview }) {
  let apiCall = await fetch('http://localhost:3000/api/data/staratlas/markets');
  let data = await apiCall.json();

  return {
    props: {
      // id: params.id,
      item: data.filter((el) => {
        return el['_id'] === params.id;
      })[0],
      //       handle: "game/" + params.handle,
    },
  };
}
