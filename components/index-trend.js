import { Box } from '@chakra-ui/react';
import Trend from 'react-trend';
function IndexTrend() {
  return (
    <Box width="300px" margin="0 auto" height="140px" mb={8}>
      <Trend
        data={[0, 12, 6, 15, 10, 20]}
        radius={50}
        strokeWidth={10}
        smooth
        autoDraw
        height={140}
        autoDrawDuration={1500}
        autoDrawEasing="ease-in"
        gradient={['#B399FF', '#7956DD']}
      />
    </Box>
  );
}

export default IndexTrend;
