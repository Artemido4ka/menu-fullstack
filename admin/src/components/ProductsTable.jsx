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

const ProductTable = ({ products }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Fats&nbsp;(g)</TableCell>
            <TableCell align="center">Proteins&nbsp;(g)</TableCell>
            <TableCell align="center">Carbs&nbsp;(g)</TableCell>
            <TableCell align="center">Price&nbsp;(g)</TableCell>
            <TableCell align="center">Weight&nbsp;(g)</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {console.log(row.id)}
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.fats}</TableCell>
              <TableCell align="center">{row.proteins}</TableCell>
              <TableCell align="center">{row.carbohydrates}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.weight}</TableCell>
              <TableCell align="right">
                <Avatar
                  alt="avatar"
                  src={row.image ? `http://localhost:5000/${row.image}` : null}
                />
              </TableCell>
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

export default ProductTable;
