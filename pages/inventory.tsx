import NextLink from 'next/link';
import { useTable, useSortBy, TableOptions } from 'react-table';
import { getAllStarAtlasMarkets } from './api/data/staratlas/markets';
import Layout from '../components/layout';
import { Box, Button, Center, HStack, Icon, IconButton, Image } from '@chakra-ui/react';
import { useMemo } from 'react';
import useWalletStore from '../stores/wallet';

import InventoryTrend from '../components/inventory-trend';
import { HiChevronUp, HiChevronDown, HiDotsVertical } from 'react-icons/hi';
import { RiWallet2Line } from 'react-icons/ri';
import Rarity from '../components/rarity';

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
    () =>
      inventoryItems.map(({ id, price, volume, trendDirection, trendStrength }) => {
        let newItem = items.find((itemData) => itemData._id === id);
        newItem.price = price;
        newItem.volume = volume;
        newItem.itemId = id;
        newItem.trendDirection = trendDirection;
        newItem.trendStrength = trendStrength;
        return newItem;
      }),
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
        Header: 'Current Price',
        accessor: 'price', // accessor is the "key" in the data
      },
      {
        Header: 'Price Trend',
      },
      {
        Header: 'Object Rarity',
        accessor: 'attributes.rarity',
      },
      {
        Header: 'Trend Direction',
        accessor: 'trendDirection',
      },
      {
        Header: 'Trend Strength',
        accessor: 'trendStrength',
      },
      {
        Header: 'Volume',
        accessor: 'volume',
      },
      {
        Header: 'Actions',
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  if (!walletIsConnected) {
    return (
      <Layout title="Inventory">
        <Center p={10} flex={1}>
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
        <Box p={[5, 5, 8]} pb={10} width="100%">
          <table width="100%" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column) => (
                    // Add the sorting props to control sorting. For this example
                    // we can add them into the header props
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                      style={{ paddingTop: 8, paddingBottom: 8 }}
                    >
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
                  // @ts-ignore
                  <NextLink href={`/item/${row.original._id}`} key={index}>
                    <Box as="tr" fontSize="sm" {...row.getRowProps()} cursor="pointer">
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
                                <Box fontSize="sm">{cell.value}</Box>
                              </td>
                            );
                            break;

                          case 'Object Rarity':
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

                          case 'Trend Direction':
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  padding: '5px',
                                  borderBottom: 'solid 1px darkgray',
                                }}
                              >
                                <Box px={2}>{cell.value}</Box>
                              </td>
                            );
                            break;

                          case 'Price Trend':
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

                          case 'Price Strength':
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  padding: '5px',
                                  borderBottom: 'solid 1px darkgray',
                                }}
                              >
                                <Box px={2}>{cell.value}</Box>
                              </td>
                            );
                            break;

                          case 'Volume':
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  padding: '5px',
                                  borderBottom: 'solid 1px darkgray',
                                }}
                              >
                                <Box px={2}>{cell.value}</Box>
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
                                  <Button mr={1} size="xs">
                                    Sell
                                  </Button>
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
                  </NextLink>
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
