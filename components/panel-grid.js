import { Box, Grid } from '@chakra-ui/react';
import ItemCard from './item-card';

function PanelGrid({ items }) {
  return (
    <Grid
      gap={4}
      templateColumns={[
        'repeat(auto-fill, minmax(100px, 1fr))',
        'repeat(auto-fill, minmax(150px, 1fr))',
        'repeat(auto-fill, minmax(200px, 1fr))',
      ]}
    >
      {items.map((el) => {
        return (
          <Box key={el._id} maxWidth={[150, 150, '340px']}>
            <ItemCard el={el} />
          </Box>
        );
      })}
    </Grid>
  );
}

export default PanelGrid;
