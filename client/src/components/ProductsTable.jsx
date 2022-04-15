import * as React from "react";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const StyledTableHeadCell = styled(TableCell)({
  textAlign: "center",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  borderRight: "1px solid white",
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(even)": {
    backgroundColor: "rgba(24, 144, 150, 0.2)",
  },
});

const StyledAvatar = styled(Avatar)({
  margin: "0 auto",
});

const ProductTable = ({ products }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              background: "teal",
            }}
          >
            <StyledTableHeadCell>Title</StyledTableHeadCell>
            <StyledTableHeadCell>Price&nbsp;(g)</StyledTableHeadCell>
            <StyledTableHeadCell>
              Recommended quantity&nbsp;(g)
            </StyledTableHeadCell>
            <StyledTableHeadCell>Description</StyledTableHeadCell>
            <StyledTableHeadCell>Fats&nbsp;(g)</StyledTableHeadCell>
            <StyledTableHeadCell>Proteins&nbsp;(g)</StyledTableHeadCell>
            <StyledTableHeadCell>Carbs&nbsp;(g)</StyledTableHeadCell>
            <StyledTableHeadCell>Weight&nbsp;(g)</StyledTableHeadCell>
            <StyledTableHeadCell sx={{ "&:last-child,": { border: 0 } }}>
              Image
            </StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.recommendedQuantity}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.fats}</TableCell>
              <TableCell align="center">{row.proteins}</TableCell>
              <TableCell align="center">{row.carbohydrates}</TableCell>

              <TableCell align="center">{row.weight}</TableCell>
              <TableCell>
                <StyledAvatar
                  alt="avatar"
                  src={row.image ? `http://localhost:5000/${row.image}` : null}
                />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
