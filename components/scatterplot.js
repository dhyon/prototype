import {
  Box,
  Center,
  Flex,
  HStack,
  LinkBox,
  LinkOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { VictoryAxis, VictoryChart } from 'victory';
import Rarity from './rarity';
import { getMinMaxGradient } from './rarity-gradient';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export default function ScatterPlot() {
  const colors = ['blue', 'red', 'green', 'orange', 'purple', 'teal', 'yellow'];
  const axisLabelColor = useColorModeValue('black', 'white');
  const filterBg = useColorModeValue('gray.50', 'gray.900');
  const inputBg = useColorModeValue('white', 'gray.700');

  const scatterData = [
    // 'x' and 'y' fields are the coordinate values displayed in the tooltip. If you decide to change
    // the 'left' and 'top' values, then you'll need to change the x and y values as well so the tooltip is believable
    { rarity: 'legendary', color: 'pink.300', left: 0.8, top: 0.3, x: 3.4, y: 1.55, size: 20 },
    { rarity: 'epic', color: 'yellow.400', left: 0.6, top: 0.7, x: 1.55, y: -2.5, size: 21 },
    { rarity: 'rare', color: 'orange.400', left: 0.5, top: 0.2, x: 0.6, y: 2.4, size: 26 },
    { rarity: 'common', color: 'green.300', left: 0.3, top: 0.3, x: -1.7, y: 1.5, size: 16 },
    { rarity: 'uncommon', color: 'gray.500', left: 0.8, top: 0.8, x: 3.2, y: -3.25, size: 10 },
    { rarity: 'anomaly', color: 'blue.300', left: 0.5, top: 0.5, x: 0.2, y: -0.2, size: 8 },
  ];

  return (
    <Box p={[5, 5, 10]}>
      <Center>
        <RadioGroup defaultValue="1">
          <Stack spacing={4} direction="row">
            <Radio value="0">All Games</Radio>
            <Radio value="1" isChecked>
              Star Atlas
            </Radio>
            <Radio value="2" isDisabled>
              DefiLand
            </Radio>
            <Radio value="3" isDisabled>
              Aurory
            </Radio>
          </Stack>
        </RadioGroup>
      </Center>

      <HStack mt={5} mb={-5} justify="center">
        {scatterData.map((x, idx) => (
          <Rarity val={x.rarity} key={idx} />
        ))}
      </HStack>

      {/* Chart */}
      <Center>
        <Flex>
          <Tooltip
            placement="left"
            hasArrow
            label="Simple Moving Average (SMA) Z-Score indicates the direction of price movement"
          >
            <Center width={100}>Price Direction (SMA) Z-Score ⓘ</Center>
          </Tooltip>

          <Box>
            {/* <Center> */}
            <Box height={[300, 400, 500, 600]} width={[300, 400, 500, 600]} position="relative">
              <VictoryChart height={500} width={500}>
                <VictoryAxis
                  domain={[-4, 4]}
                  crossAxis
                  tickValues={[-4, -3, -2, -1, 0, 1, 2, 3, 4]}
                  style={{
                    tickLabels: { fill: axisLabelColor, fontSize: 12 },
                    axis: { stroke: 'gray' },
                    grid: { stroke: 'gray', strokeWidth: 0.5 },
                  }}
                />
                <VictoryAxis
                  domain={[-4, 4]}
                  crossAxis
                  dependentAxis
                  tickValues={[-4, -3, -2, -1, 1, 2, 3, 4]}
                  style={{
                    tickLabels: { fill: axisLabelColor, fontSize: 12 },
                    axis: { stroke: 'gray' },
                    grid: { stroke: 'gray', strokeWidth: 0.5 },
                  }}
                />
              </VictoryChart>
              {/* <Image src={gridImage} width="100%" height="100%" zIndex={1} position="relative" /> */}
              {scatterData.map(({ ...props }, idx) => {
                return <Bubble {...props} key={idx} />;
              })}
            </Box>
            {/* </Center> */}

            <Tooltip
              placement="bottom"
              hasArrow
              label="Average Directional Index (ADX) Z-Score indicates the strength or weakness of a trend"
            >
              <Center>Trend Strength (ADX Z-Score) ⓘ</Center>
            </Tooltip>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}

function Bubble(props) {
  const { rarity, color: bg, left, top, x, y, size, idx } = props;

  return (
    <Tooltip rounded="lg" p={0} shadow="lg" bg="none" key={idx} label={<BubbleInfo {...props} />}>
      <LinkBox
        bg={bg}
        cursor="pointer"
        boxSize={size * 3 + 'px'}
        rounded="full"
        opacity={0.85}
        _hover={{ opacity: 1 }}
        position="absolute"
        left={left * 100 + '%'}
        top={top * 100 + '%'}
        zIndex={10}
      >
        <NextLink
          passHref={true}
          href={{
            pathname: 'game/[slug]',
            query: { slug: 'star-atlas', filterRarity: rarity },
          }}
        >
          <LinkOverlay>
            <Center p={0} height="100%">
              {x > 0 && y > 0 ? '🔥' : ''}
            </Center>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </Tooltip>
  );
}

function BubbleInfo(props) {
  const { rarity, color, left, top, x, y, size, idx } = props;
  const { min, max } = getMinMaxGradient(rarity);
  return (
    <Box p={3} rounded="lg" overflow="hidden" bgGradient={`linear(to-r, ${min}, ${max})`}>
      <Center textTransform="uppercase" color={'white'} fontWeight="bold" fontSize="sm" mb={1}>
        {rarity}
      </Center>
      <Text size="xs" color="gray.700">
        Trend Strength (ADX)
      </Text>
      <Text fontSize="lg" color="white" borderBottomWidth={1} mb={1}>
        {x}
      </Text>
      <Text size="xs" color="gray.700">
        Price Direction (SMA)
      </Text>
      <Text fontSize="lg" color="white" borderBottomWidth={1} mb={1}>
        {y}
      </Text>
      <Text size="lg" color="gray.700">
        Daily Volume
      </Text>
      <Text fontSize="lg" color="white">
        {Math.round(Math.random() * 10000)}
      </Text>
    </Box>
  );
}
