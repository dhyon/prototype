import { LoremIpsum } from 'react-lorem-ipsum';
import Layout from '../../components/layout';
import PanelGrid from '../../components/panel-grid';
import * as JsSearch from 'js-search';

import {
  CheckboxGroup,
  Checkbox,
  Input,
  Button,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  HStack,
  Box,
  Image,
  Heading,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import ItemCard from '../../components/item-card';
import { useState } from 'react';
import { HiChevronDown, HiSearch } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { getAllStarAtlasMarkets } from '../api/data/staratlas/markets';

const Page = ({ game = {}, markets = [] }) => {
  const [items, setItems] = useState(markets);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState([]);
  const cardBg = useColorModeValue('gray.100', 'gray.700');
  const search = new JsSearch.Search('_id');
  search.addIndex('name');
  search.addIndex('description');
  search.addIndex('network');
  search.addIndex(['attributes', 'itemType']);
  search.addIndex(['attributes', 'rarity']);
  search.addIndex(['attributes', 'poster']);
  search.addIndex(['attributes', 'musician']);
  search.addDocuments(markets);

  function changeSearchTerm(e) {
    let newItems = search.search(e.currentTarget.value);
    setSearchTerm(e.currentTarget.value);
    setItems(newItems);

    if (e.currentTarget.value == '') {
      setItems(markets);
    }
  }

  function clearSearch() {
    setSearchTerm('');
    setItems(markets);
  }

  function addFilter(e) {
    setFilters(e);
  }

  function addFilters(items) {
    if (filters.length) {
      let filteredItems = [];

      filters.forEach((filter) => {

        let tempFilter = items.filter((item) => {
          return item.attributes.rarity == filter;
        });

        filteredItems = filteredItems.concat( tempFilter );
      });

      return filteredItems;
    } else {
      return items;
    }
  }

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

            <InputGroup mb={[2, 2, 3]}>
              <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                <HiSearch />
              </InputLeftElement>

              <Input value={searchTerm} onChange={changeSearchTerm.bind(this)} />

              <InputRightElement
                onClick={clearSearch.bind(this)}
                cursor="pointer"
                _hover={{ color: 'gray.500' }}
                color="gray.300"
                fontSize="1.2em"
              >
                <IoClose />
              </InputRightElement>
            </InputGroup>

            <Box mb={[2, 2, 3]}>
              <FormLabel mb={1}>Rarity</FormLabel>
              <CheckboxGroup onChange={addFilter.bind(this)}>
                <Checkbox mr={6} mb={2} value="epic">
                  Epic
                </Checkbox>
                <Checkbox mr={6} mb={2} value="legendary">
                  Legendary
                </Checkbox>
                <Checkbox mr={6} mb={2} value="rare">
                  Rare
                </Checkbox>
                <Checkbox mr={6} mb={2} value="common">
                  Common
                </Checkbox>
                <Checkbox mr={6} mb={2} value="uncommon">
                  Uncommon
                </Checkbox>
              </CheckboxGroup>
            </Box>

            <PanelGrid items={addFilters(items)} />
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
