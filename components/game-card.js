import { Box } from '@chakra-ui/react';
import Link from "next/link";

function GameCard({ el }) {
  return (
    <Link href={ "/game/" + el._id }>
    <Box key={el._id} bg="orange.300" height="100px" cursor="pointer" p={ 5 } rounded="lg" shadow="md" _active={{shadow: "none"}} transition="0.2s ease">
      {el.name}
    </Box>
    </Link>
  );
}

export default GameCard;
