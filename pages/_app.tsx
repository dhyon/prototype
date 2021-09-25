import '../public/styles.css'
import theme from "../public/theme";
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={ theme }>
   <Component {...pageProps} />
   </ChakraProvider>
}
export default MyApp
