import NextImage from 'next/image';
import { useTable, useSortBy } from 'react-table';
import { getAllStarAtlasMarkets } from './api/data/staratlas/markets';
import Layout from '../components/layout';
import {
  Box,
  Button,
  Center,
  HStack, 
  Heading,
  Icon,
  IconButton,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import useWalletStore from '../stores/wallet';

import InventoryTrend from '../components/inventory-trend';
import { HiChevronUp, HiChevronDown, HiDotsVertical } from 'react-icons/hi';
import { RiWallet2Line } from 'react-icons/ri';
import Rarity from '../components/rarity';
import RarityGradient from '../components/rarity-gradient';

interface HomeProps {
  items: Array<any>;
}

const Home = ({ items }: HomeProps) => {
  const [inventoryItems, walletIsConnected, toggleWalletConnect] = useWalletStore((state) => [
    state.getItems(),
    state.isConnected,
    state.toggleWalletConnection,
  ]);

  const data = useMemo(
    () => inventoryItems.map((i) => items.find((item) => item._id === i)),
    [walletIsConnected], // data is recalculated if hook is triggered
  );

  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'image', // accessor is the "key" in the data
      },
      {
        Header: 'Symbol',
        accessor: 'symbol', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Price',
      },
      {
        Header: 'Trend',
      },
      {
        Header: 'Rarity',
        accessor: 'attributes.rarity',
      },
      {
        Header: 'ROI',
      },
      {
        Header: 'ADX',
      },
      {
        Header: 'Activity',
      },
      {
        Header: 'Actions',
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const tableBorderColor = useColorModeValue('#eaeaea', '#1a1a1a');
  const tableColor = useColorModeValue('#1a1a1a', '#eaeaea');

  if (!walletIsConnected) {
    return (
      <Layout title="Inventory">
        <Center p={10}>
          <Button
            rightIcon={<Icon as={RiWallet2Line} />}
            colorScheme="purple"
            variant="solid"
            onClick={toggleWalletConnect}
          >
            Connect wallet to view inventory
          </Button>
        </Center>
      </Layout>
    );
  } else {
    return (
      <Layout title="Inventory">
        <Box p={[5, 5, 8]} pb={10}>
          <table style={{border: "solid 1px darkgray"}} {...getTableProps()}>
            <thead >
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column) => (
                    // Add the sorting props to control sorting. For this example
                    // we can add them into the header props
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index} style={{paddingTop: 8, paddingBottom: 8}} >
                      {column.render('Header')}
                      {/* Add a sort direction indicator */}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <HiChevronDown
                              style={{ display: 'inline-block', fontSize: 20, marginLeft: 5 }}
                            />
                          ) : (
                            <HiChevronUp
                              style={{ display: 'inline-block', fontSize: 20, marginLeft: 5 }}
                            />
                          )
                        ) : (
                          ''
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <Box as="tr" fontSize="sm" {...row.getRowProps()} key={index} >
                    {row.cells.map((cell) => {
                      switch (cell.column.Header) {
                        case '': // the image
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '10px',
                                borderBottom: 'solid 1px darkgray',
                                
                              }}
                            >
                              <Image
                                imageResolution="10dpi"
                                src={cell.value}
                                width="50px"
                                height="50px"
                                rounded="md"
                                objectFit="cover"
                                m="0 auto"
                              />
                            </td>
                          );
                          break;

                        case 'Price':
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '5px',
                                borderBottom: 'solid 1px darkgray',
                              }}
                            >
                              <Box fontSize="sm">{Math.round(Math.random() * 100)}</Box>
                            </td>
                          );
                          break;

                        case 'Rarity':
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '5px',
                                borderBottom: 'solid 1px darkgray',
                              }}
                            >
                              <Center>
                                <Rarity val={cell.value} />
                              </Center>
                            </td>
                          );
                          break;

                        case 'ROI':
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '5px',
                                borderBottom: 'solid 1px darkgray',
                              }}
                            >
                              <Box px={2}>{Math.round(Math.random() * 100)}%</Box>
                            </td>
                          );
                          break;

                        case 'Trend':
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '5px',
                                borderBottom: 'solid 1px darkgray',
                              }}
                            >
                              <InventoryTrend />
                            </td>
                          );
                          break;

                        case 'ADX':
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '5px',
                                borderBottom: 'solid 1px darkgray',
                              }}
                            >
                              <Box px={2}>{'<25'}</Box>
                            </td>
                          );
                          break;

                        case 'Activity':
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '5px',
                                borderBottom: 'solid 1px darkgray',
                              }}
                            >
                              <Box px={2}>{'Buys ↑27%'}</Box>
                            </td>
                          );
                          break;

                        case 'Actions':
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '5px',
                                borderBottom: 'solid 1px darkgray',
                              }}
                            >
                              <HStack spacing={1}>
                                <Button ml={1} mr={1} size="xs">
                                  Buy
                                </Button>
                                <Button mr={1} size="xs">Sell</Button>
                                <IconButton
                                  size="xs"
                                  float="right"
                                  variant="ghost"
                                  rounded="full"
                                  aria-label="More Options"
                                >
                                  <Icon as={HiDotsVertical} />
                                </IconButton>
                              </HStack>
                            </td>
                          );
                          break;

                        default:
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                              padding: '5px',
                                borderBottom: 'solid 1px darkgray',
                              }}
                            >
                              {cell.render('Cell')}
                            </td>
                          );
                          break;
                      }
                    })}
                  </Box>
                );
              })}
            </tbody>
          </table>
        </Box>
      </Layout>
    );
  }
};

export default Home;

export async function getStaticProps() {
  const markets = await getAllStarAtlasMarkets();

  return {
    props: {
      items: markets,
    },
  };
}
