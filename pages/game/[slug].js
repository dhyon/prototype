import { LoremIpsum } from 'react-lorem-ipsum';
import Layout from '../../components/layout';
import PanelGrid from '../../components/panel-grid';
import {
  CheckboxGroup, 
  Checkbox,
  Tabs,
  TabList,
  Button, 
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Box,
  Image,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from '@chakra-ui/react';
import ItemCard from '../../components/item-card';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { getAllStarAtlasMarkets } from '../api/data/staratlas/markets';

const Page = ({ game = {}, markets = [] }) => {
  const [items, setItems] = useState(markets);
  const cardBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Layout title={game.name}>
      <Box overflow="hidden">
        <Box position="relative">
          <Image
            src={game.image || '#'}
            width="100%"
            height={[200, 300, '400px']}
            loading="lazy"
            objectFit="cover"
          />

          <Box position="absolute" p={[10, 10, 20]} px={[8, 8, 10]} bottom={0}>
            <Heading color="white" size="4xl">
              {game.name}
            </Heading>

            <Heading color="gray.500" size="lg">
              {game.symbol}
            </Heading>
          </Box>
        </Box>

        <Box p={[5, 5, 8]}>
          <Box mb={[5, 5, 8]}>
            <LoremIpsum />
          </Box>

          <Box>
            <Heading size="sm" color="gray.500" mb={[2, 2, 3]}>
              NFTs
            </Heading>

            <HStack mb={4}>
              <Menu>
                <MenuButton as={Button} rightIcon={<HiChevronDown />}>
                  Filter
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>


              <Box>
                <CheckboxGroup >
                  <Checkbox mx={4}>
                    asdf
                  </Checkbox>
                  <Checkbox mx={4}>
                  asdf
                    </Checkbox>
                  <Checkbox mx={4}>
                    asdf
                  </Checkbox>

                </CheckboxGroup>
              </Box>
            </HStack>

            <PanelGrid items={items} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Page;

export async function getStaticPaths() {
  const data = [
    {
      name: 'Star Atlas',
      description: 'Lorem',
      slug: 'star-atlas',
      _id: 'foobar',
      image: '/star-atlas.jpg',
      symbol: 'SA',
    },
  ];

  const paths = data.map((el, idx) => {
    return {
      params: {
        slug: el['slug'],
        data: el,
        // handle: el["_id"],
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params, locale, locales, preview }) {
  const data = [
    {
      name: 'Star Atlas',
      description: 'Lorem',
      slug: 'star-atlas',
      _id: 'foobar',
      image: '/star-atlas.jpg',
      symbol: 'SA',
    },
  ];

  const markets = await getAllStarAtlasMarkets();

  return {
    props: {
      // id: params.id,
      game: data.filter((el) => {
        return el['slug'] === params.slug;
      })[0],
      markets: markets,
      // handle: "game/" + params.handle,
    },
  };
}
