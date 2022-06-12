import React, { FC } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { ICurrState } from './types';

interface CurrListProps {
  currencyList: ICurrState[];
}

const CurrList: FC<CurrListProps> = ({ currencyList }) => {
  return (
    <>
      <Typography variant="h2" component="h1" align={'center'} gutterBottom>
        Список валют
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Currency name</TableCell>
              <TableCell align="right">sign</TableCell>
              <TableCell align="right">price USD</TableCell>
              <TableCell align="right">price RUB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyList.length ? (
              currencyList.map((currency) => (
                <TableRow
                  key={currency.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {currency.fullName}
                  </TableCell>
                  <TableCell align="right">{currency.shortName}</TableCell>
                  <TableCell align="right">{currency.exchange.USD}</TableCell>
                  <TableCell align="right">{currency.exchange.RUB}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>NO DATA</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CurrList;
