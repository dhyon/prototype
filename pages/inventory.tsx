import type { NextPage } from 'next';
import { useTable, useSortBy } from 'react-table';
import { getAllStarAtlasMarkets } from './api/data/staratlas/markets';
import Layout from '../components/layout';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useMemo } from 'react';
import InventoryTrend from '../components/inventory-trend';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

interface HomeProps {
  items: Array<any>;
}

const Home = ({ items }: HomeProps) => {
  const data = useMemo(() => items.slice(0, 10), []);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },

      // {
      //   Header: 'Price',
      //   accessor: 'price', // accessor is the "key" in the data
      // },

      {
        Header: 'Image',
        accessor: 'image', // accessor is the "key" in the data
      },

      {
        Header: 'Rarity',
        accessor: 'attributes.rarity',
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const tableBorderColor = useColorModeValue('#eaeaea', '#1a1a1a');
  const tableColor = useColorModeValue('#1a1a1a', '#eaeaea');

  return (
    <Layout title="Inventory">
      <Box p={[5, 5, 8]} pb={10}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column) => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>
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
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell) => {
                    switch (cell.column.Header) {
                      // case 'Price':
                      //   <td
                      //     {...cell.getCellProps()}
                      //     style={{
                      //       padding: '10px',
                      //       borderBottom: 'solid 1px gray',
                      //     }}
                      //   >
                      //     <Box>
                      //       { Math.random() * 100 } SOL
                      //     </Box>
                      //   </td>;
                      //   return;
                      //   break;
                      case 'Image':
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: '10px',
                              borderBottom: 'solid 1px gray',
                            }}
                          >
                            {/* <Image imageResolution="10dpi" src={cell.value} width="40px" height="40px" rounded="md" objectFit="cover" /> */}
                            <InventoryTrend />
                          </td>
                        );

                        break;

                      default:
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: '10px',
                              borderBottom: 'solid 1px gray',
                            }}
                          >
                            {cell.render('Cell')}
                          </td>
                        );

                        break;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </Layout>
  );
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
