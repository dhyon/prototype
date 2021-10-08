import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram,FaDiscord,FaFacebook } from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} py={50}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={250}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'https://solana.com'}>About</Link>
            <Link href={'https://solana.com'}>Blog</Link>
            <Link href={'https://solana.com'}>Careers</Link>
            <Link href={'https://solana.com'}>Contact</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'https://solana.com'}>Tutorials</Link>
            <Link href={'https://solana.com'}>Documentation</Link>
            <Link href={'https://solana.com'}>Discord</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'https://solana.com'}>Pricing</Link>
            <Link href={'https://solana.com'}>Partners</Link>
            <Link href={'https://solana.com'}>Trials</Link>
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={100}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text >© 2021 Project Titan</Text>
          <Stack direction={'row'} spacing={5}>
            <SocialButton label={'Twitter'} href={'https://solana.com/ignition'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://solana.com/ignition'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://solana.com/ignition'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://solana.com/ignition'}>
              <FaDiscord />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://solana.com/ignition'}>
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}