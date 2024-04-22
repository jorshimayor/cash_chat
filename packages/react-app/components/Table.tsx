import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface DataRow {
  symbol: string;
  name: string;
  last_price: number;
  change_in_percent: number;
  change: number;
}

function createData(
  symbol: string,
  name: string,
  last_price: number,
  change_in_percent: number,
  change: number
): DataRow {
  return { symbol, name, last_price, change_in_percent, change };
}

const rows = [
  createData("BTCUSD=X", "Bitcoin USD", 6.0, 24, 4.0),
  createData("ETHUSD=X", "Ethereum", 9.0, 37, 4.3),
  createData("EURUSD=X", "EUR/USD", 16.0, 24, 6.0),
  createData("JPY=X", "USD/JPY", 3.7, 67, 4.3),
  createData("GBPUSD=X", "GBP/USD", 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ color: "#a49ad6", fontWeight: 400, fontSize: "12px" }}
            >
              Symbol
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "#a49ad6", fontWeight: 400, fontSize: "12px" }}
            >
              Name
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "#a49ad6", fontWeight: 400, fontSize: "12px" }}
            >
              Last Price
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "#a49ad6", fontWeight: 400, fontSize: "12px" }}
            >
              Change %
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "#a49ad6", fontWeight: 400, fontSize: "12px" }}
            >
              Change
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.symbol}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.last_price}</TableCell>
              <TableCell align="right">{row.change_in_percent}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
