import { Box } from '@chakra-ui/react';
import Trend from 'react-trend';
function IndexTrend() {
  return (
    <Box width="80px" margin="0 auto" height="60px">
      <Trend
        data={[
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
        ]}
        radius={5}
        strokeWidth={6}
        smooth
        autoDraw
        height={80}
        gradient={['#B399FF', '#B399FF', '#7956DD']}
      />
    </Box>
  );
}

export default IndexTrend;
