import { Link } from "react-router-dom";

import {
  BLUE,
  CANCELED,
  COOKING,
  GREEN,
  ORDERED,
  PURPLE,
  READY,
  RED,
  SUPERLIGHTGREEN,
} from "../constants";
import { StyledButton } from "./StyledButton";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Avatar, Chip, List, ListItem } from "@material-ui/core";
import { ListItemAvatar, ListItemText } from "@mui/material";

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

const StyledChip = styled(Chip)(({ status }) => ({
  backgroundColor: status,
  color: "white",
}));

const OrdersTable = ({ orders }) => {
  const switchColor = (status) => {
    console.log(status);
    if (status === ORDERED) return PURPLE;
    if (status === COOKING) return BLUE;
    if (status === READY) return GREEN;
    if (status === CANCELED) return RED;
  };

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
            <StyledTableHeadCell>Описание</StyledTableHeadCell>
            <StyledTableHeadCell>Цена&nbsp;(BYN)</StyledTableHeadCell>
            <StyledTableHeadCell>Дата</StyledTableHeadCell>
            <StyledTableHeadCell>Продукты</StyledTableHeadCell>
            <StyledTableHeadCell>Статус</StyledTableHeadCell>
            <StyledTableHeadCell>Info</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                {row.products.map((product) => (
                  <div key={product.id}>
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            alt="avatar"
                            src={
                              product.image
                                ? `http://localhost:5000/${product.image}`
                                : null
                            }
                          />
                        </ListItemAvatar>
                        <ListItemText primary={product.title} />
                      </ListItem>
                    </List>
                  </div>
                ))}
              </TableCell>
              <TableCell align="center">
                <StyledChip
                  label={row.status}
                  status={switchColor(row.status)}
                />
              </TableCell>
              <TableCell align="center">
                <Link to={`/orders/${row.id}`}>
                  <StyledButton variant="contained">Подробнее..</StyledButton>
                </Link>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
