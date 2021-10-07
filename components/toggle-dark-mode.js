import { IconButton, Icon, useColorMode } from '@chakra-ui/react';
import { HiOutlineSun } from "react-icons/hi";

function ToggleDarkMode() {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton fontSize="lg" variant="ghost" rounded="full" aria-label="Toggle Dark Mode" onClick={toggleColorMode}>
          <Icon as={HiOutlineSun} />
        </IconButton>
  );
}

export default ToggleDarkMode;
