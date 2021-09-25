import type { NextPage } from 'next';
// import Image from 'next/image'
import Layout from '../components/layout';
import { HStack, Box, Image, Heading, Button, SimpleGrid, Center } from '@chakra-ui/react';
import { useState } from 'react';
import siteStore from '../stores/site';
import GameCard from '../components/game-card';
import {
  VictoryChart, 
  VictoryLine, 
  VictoryZoomContainer, 
  VictoryBrushContainer, 
  VictoryAxis, 
} from "victory"

const Home: NextPage = () => {
  let state: any = {};
  state = siteStore((state) => state);

  let [ selectedDomain, setSelectDomain ] = useState({
    x: [new Date(1987, 1, 1), new Date(1993, 1, 1)],
    y: [125, 515]
  });
  let [ zoomDomain, setZoomDomain ] = useState({
    x: [new Date(1987, 1, 1), new Date(1993, 1, 1)],
    y: [125, 515]
  });

  function handleZoom(domain: any) {
    debugger
    setSelectDomain( domain )
  }

  function handleBrush(domain: any) {
    debugger
    setZoomDomain( domain )
  }


  return (
    <Layout title="Home">
      <Box height={600} px={10}>
 <VictoryChart
            width={800}
            height={500}
            scale={{x: "time"}}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                zoomDimension="x"
                zoomDomain={zoomDomain}
                onZoomDomainChange={handleZoom.bind(this)}
              />
            }
          >
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />

          </VictoryChart>

          <VictoryChart
            width={550}
            height={90}
            scale={{x: "time"}}
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            containerComponent={
              <VictoryBrushContainer responsive={false}
                brushDimension="x"
                brushDomain={selectedDomain}
                onBrushDomainChange={handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
              tickValues={[
                new Date(1985, 1, 1),
                new Date(1990, 1, 1),
                new Date(1995, 1, 1),
                new Date(2000, 1, 1),
                new Date(2005, 1, 1),
                new Date(2010, 1, 1),
                new Date(2015, 1, 1)
              ]}
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />
          </VictoryChart>
              </Box>
    </Layout>
  );
};

export default Home;
