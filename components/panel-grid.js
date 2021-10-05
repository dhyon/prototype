import { Box, Grid } from '@chakra-ui/react';
import ItemCard from './item-card';

function PanelGrid({ items }) {
  return (
    <Grid
      gap={5}
      templateColumns={[
        'repeat(auto-fit, minmax(100px, 1fr))',
        'repeat(auto-fit, minmax(150px, 1fr))',
        'repeat(auto-fit, minmax(180px, 1fr))',
      ]}
    >
      {items.map((el) => {
        return (
          <Box key={el._id}>
            <ItemCard el={el} />
          </Box>
        );
      })}
    </Grid>
  );
}

export default PanelGrid;
