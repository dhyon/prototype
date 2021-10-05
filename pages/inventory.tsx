import type { NextPage } from 'next';
// import Image from 'next/image'
import { useTable, useSortBy } from 'react-table';

import Layout from '../components/layout';
import { Box, Image, Heading, useColorModeValue } from '@chakra-ui/react';
import { useMemo } from "react";

const Home: NextPage = () => {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;


  const tableBorderColor = useColorModeValue("#eaeaea", "#1a1a1a")
  const tableColor = useColorModeValue("#1a1a1a", "#eaeaea")

  return (
    <Layout title="Inventory">
      <Box p={[5, 5, 8]}>
        <Heading fontWeight="bold" textTransform="uppercase" mb={ 4 }>
          Inventory
        </Heading>

        <table {...getTableProps()} style={{ border: `solid 1px ${tableColor}` }}>
          <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
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
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
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
