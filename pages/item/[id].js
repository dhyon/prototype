// import type { NextPage } from 'next';
// import Image from 'next/image'
import { VictoryChart, VictoryScatter, VictoryAxis } from 'victory';
import Rarity from '../../components/rarity';
import RarityGradient from '../../components/rarity-gradient';

import Layout from '../../components/layout';
import { Box, Image, Heading, useColorModeValue, Tooltip, SimpleGrid } from '@chakra-ui/react';
import { getAllStarAtlasMarkets } from '../api/data/staratlas/markets';
import { getMarketData } from '../api/data/staratlas/markets/[marketId]';

const Page = ({ item = {}, marketData = {}, id }) => {
  // TODO: if item/marketData are undefined/null then we should gracefully display an error message
  // let bg = useColorModeValue('green.200', 'red.500')
  const colors = ['blue', 'red', 'green', 'orange', 'purple', 'teal', 'yellow'];
  const lightBg = useColorModeValue('gray.200', 'gray.700');
  const gridImage = useColorModeValue('/grid-light.jpg', '/dark-grid.jpg');
  let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
    const scaledIndex = Math.floor(index % 7);
    return {
      x: Math.random(-2, 2),
      y: Math.random(-2, 2),
      size: Math.random(10) * 10 + 10,
      symbol: 'circle',
      fill: colors[index],
      opacity: 0.6,
    };
  });

  return (
    <Layout title={item.name}>
      <Box position="relative">
        <Image
          src={item.image || '#'}
          width="100%"
          height={[200, 300, '400px']}
          loading="lazy"
          objectFit="cover"
        />

        <Box position="absolute" p={[10, 10, 20]} px={[8, 8, 10]} bottom={0}>
          <Heading color="gray.200" size="4xl">
            {item.name}
          </Heading>

          <Heading color="gray.300" size="lg" mb={2}>
            {item.symbol}
          </Heading>

          <Rarity val={item.attributes.rarity} />
        </Box>
      </Box>

      {/* Victory Chart */}
      {/* /item/asdfakjsndfkjandsf/movement */}
      <Box>
        <RarityGradient val={item.attributes.rarity} />
      </Box>

      <SimpleGrid>
      <Box p={[5, 5, 10]}>
        <Box mb={2}>{item.description}</Box>

        <Box height={[300, 400, 500, 600]} width={[300, 400, 500, 600]} position="relative">
          <Image src={gridImage} width="100%" height="100%" zIndex={1} position="relative" />

          {['green', 'blue', 'red', 'yellow', 'orange', 'gray'].map((el, idx) => {
            return <Box key={ idx + el}> <Bubble el={el} idx={idx} />
            </Box>
          })}
        </Box>

        
      </Box>

      <Box p={[5, 5, 10]}>
        <Box mb={2}>{item.description}</Box>

        <Box height={[300, 400, 500, 600]} width={[300, 400, 500, 600]} position="relative">
          <Image src={gridImage} width="100%" height="100%" zIndex={1} position="relative" />

          {['green', 'blue', 'red', 'yellow', 'orange', 'gray'].map((el, idx) => {
            return <Box key={ idx + el}> <Bubble el={el} idx={idx} />
            </Box>
          })}
        </Box>

        
      </Box>
      </SimpleGrid>
      

      <Box height="520px" width="520px" bg="white" rounded="md" display="none">
          <VictoryChart animate={{ duration: 1200, easing: 'bounceIn' }}>
            <VictoryScatter
              data={data}
              style={{
                data: {
                  fill: ({ datum }) => datum.fill,
                  opacity: ({ datum }) => datum.opacity,
                },
              }}
            />

            <VictoryAxis
              crossAxis
              width={520}
              height={520}
              domain={[-2, 2]}
              // theme={VictoryTheme.material}
              standalone={false}
            />
            <VictoryAxis
              dependentAxis
              crossAxis
              width={320}
              height={220}
              domain={[-2, 2]}
              // theme={VictoryTheme.material}
              standalone={false}
            />
          </VictoryChart>
        </Box>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const markets = await getAllStarAtlasMarkets();
  const item = markets.filter((item) => item._id === id)[0];
  if (!item) return { props: { id: id } };
  const marketData = await getMarketData(item.markets[0].id);

  return {
    props: {
      id: id,
      item: item,
      marketData: marketData,
    },
  };
}

export default Page;

function Bubble({ el, idx }) {
  const bg = useColorModeValue(el + '.400', el + '.200');
  const size = Math.random() * 100 + idx;
  return (
    <Tooltip label={<Box height="200px" width="200px">
      
    </Box>}>
      <Box
        bg={bg}
        cursor="pointer"
        width={ size }
        height={ size }
        rounded="full"
        opacity={0.8}
        _hover={{ opacity: 0.98 }}
        borderWidth={2}
        position="absolute"
        left={Math.random() * 80 + '%'}
        top={Math.random() * 80 + '%'}
        zIndex={10}
      ></Box>
    </Tooltip>
  );
}
