import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@material-ui/core";


const ProductTable = ({ products }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Fats&nbsp;(g)</TableCell>
            <TableCell align="right">Proteins&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Price&nbsp;(g)</TableCell>
            <TableCell align="right">Weight&nbsp;(g)</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.fats}</TableCell>
              <TableCell align="right">{row.proteins}</TableCell>
              <TableCell align="right">{row.carbohydrates}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">
                <Avatar alt="avatar" src={row.image ? `http://localhost:5000/${row.image}` : null} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
