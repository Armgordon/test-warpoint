import React, { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { ICurrState } from './types';
import './CurrencuList.scss';

interface Column {
  id: 'name' | 'sign' | 'priceUSD' | 'priceRUB';
  label: string;
  align?: 'right' | 'center';
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Название криптовалюты' },
  { id: 'sign', label: 'Аббревиатура валюты' },
  {
    id: 'priceUSD',
    label: 'Цена в USD',
    align: 'right',
  },
  {
    id: 'priceRUB',
    label: 'Цена в RUB',
    align: 'right',
  },
];

interface CurrListProps {
  currencyList: ICurrState[];
}

const CurrencyList: FC<CurrListProps> = ({ currencyList }) => {
  return (
    <>
      <Typography variant="h2" component="h1" align={'center'} gutterBottom>
        Список валют
      </Typography>
      <Table sx={{ tableLayout: 'fixed' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                sx={{
                  color: 'primary.main',
                  whiteSpace: { xs: 'normal', md: 'nowrap' },
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyList.length ? (
            currencyList.map((currency) => (
              <TableRow
                key={currency.id}
                sx={{
                  '&': {
                    borderBottom: { xs: 3, sm: 'none' },
                    borderColor: 'primary.dark',
                  },
                  '&:last-child td': { border: { sm: 0 } },
                  '&:hover': { backgroundColor: { sm: 'primary.dark' } },
                  display: { xs: 'block', sm: 'table-row' },
                }}
              >
                <TableCell
                  data-label="Криптовалюта"
                  sx={{
                    display: { xs: 'block', sm: 'table-cell' },
                    textAlign: { xs: 'right', sm: 'left' },
                  }}
                >
                  {currency.fullName}
                </TableCell>
                <TableCell
                  data-label="Аббревиатура"
                  sx={{
                    display: { xs: 'block', sm: 'table-cell' },
                    textAlign: { xs: 'right', sm: 'left' },
                  }}
                >
                  {currency.shortName}
                </TableCell>
                <TableCell
                  data-label="Цена в USD"
                  sx={{ display: { xs: 'block', sm: 'table-cell' } }}
                  align="right"
                >
                  {currency.exchange.USD}
                </TableCell>
                <TableCell
                  data-label="Цена в RUB"
                  sx={{
                    display: { xs: 'block', sm: 'table-cell' },
                  }}
                  align="right"
                >
                  {currency.exchange.RUB}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>Пожалуйста подождите. Данные загружаются...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default CurrencyList;
