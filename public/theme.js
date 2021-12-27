import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  colors: {
    titan: '#7956DD',
    titanLight: '#B399FF',
    darkGray: '#393940',
    darkerGray: '#2E2E33',
  },

  fonts: {
    heading: 'Titillium Web',
  },
});

export default theme;
