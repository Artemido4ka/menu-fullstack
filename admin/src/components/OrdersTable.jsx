import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrdersTable = ({ orders }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price&nbsp;(BYN)</TableCell>
            <TableCell align="center">Products</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">
                {row.products.map((product) => (
                  <div>{product.title}</div>
                ))}
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                <Link to={`/products/${row.id}`}>Check it ! </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
