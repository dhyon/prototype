import { Box, Grid } from '@chakra-ui/react';
import ItemCard from './item-card';

function PanelGrid({ items }) {
  return (
    <Grid
      gap={5}
      templateColumns={[
        'repeat(auto-fit, minmax(100px, 100px))',
        'repeat(auto-fit, minmax(180px, 180px))',
        'repeat(auto-fit, minmax(200px, 200px))',
        'repeat(auto-fit, minmax(220px, 220px))',
      ]}
    >
      {items.map((el) => {
        return (
          <Box key={el._id} >
            <ItemCard el={el} />
          </Box>
        );
      })}
    </Grid>
  );
}

export default PanelGrid;
