import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
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
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      borderTopWidth={1}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={100}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2021 Project Titan</Text>
          <Spacer />

          <Stack direction={'row'} spacing={4}>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://solana.com/ignition'}>
              <FaDiscord />
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/dhyon/prototype'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'https://twitter.com/TitanAnalytics0'}>
              <FaTwitter />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
