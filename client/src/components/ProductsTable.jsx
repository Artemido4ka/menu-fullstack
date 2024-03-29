import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { SUPERLIGHTGREEN } from "../constants";

const StyledTableHeadCell = styled(TableCell)({
  textAlign: "center",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  borderRight: "1px solid white",
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(even)": {
    backgroundColor: `${SUPERLIGHTGREEN}`,
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
            <StyledTableHeadCell>Название</StyledTableHeadCell>
            <StyledTableHeadCell>Цена&nbsp;(руб)</StyledTableHeadCell>
            <StyledTableHeadCell>Рекомендуемое кол-во</StyledTableHeadCell>
            <StyledTableHeadCell>Описание</StyledTableHeadCell>
            <StyledTableHeadCell>Жиры&nbsp;(г)</StyledTableHeadCell>
            <StyledTableHeadCell>Белки&nbsp;(г)</StyledTableHeadCell>
            <StyledTableHeadCell>Углеводы&nbsp;(г)</StyledTableHeadCell>
            <StyledTableHeadCell>Масса&nbsp;(г)</StyledTableHeadCell>
            <StyledTableHeadCell sx={{ "&:last-child,": { border: 0 } }}>
              Изображение
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
