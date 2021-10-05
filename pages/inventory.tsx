import type { NextPage } from 'next';
// import Image from 'next/image'
import { useTable, useSortBy } from 'react-table';
import { getAllStarAtlasMarkets } from './api/data/staratlas/markets';
import Layout from '../components/layout';
import { Box, Image, Heading, useColorModeValue } from '@chakra-ui/react';
import { useMemo } from 'react';

const Home: NextPage = ({ items }) => {
  const data = useMemo(() => items, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
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
      <Box p={[5, 5, 8]}>
        <Heading fontWeight="bold" textTransform="uppercase" mb={4}>
          Inventory
        </Heading>

        <table {...getTableProps()} >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {/* Add a sort direction indicator */}
                    <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    switch (cell.column.Header) {
                      case "Image":
                        debugger
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: '10px',
                              borderBottom: 'solid 1px gray',
                            }}
                          >
                            <Image imageResolution="10dpi" src={cell.value} width="40px" height="40px" rounded="md" objectFit="cover" />
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
