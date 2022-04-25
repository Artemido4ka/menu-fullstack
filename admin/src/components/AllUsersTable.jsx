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
import { StyledButton } from "./StyledButton";
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

const AllUsersTable = ({ users }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              background: "teal",
            }}
          >
            <StyledTableHeadCell>id</StyledTableHeadCell>
            <StyledTableHeadCell>Фамилия</StyledTableHeadCell>
            <StyledTableHeadCell>Имя&nbsp;</StyledTableHeadCell>
            <StyledTableHeadCell>Email&nbsp;</StyledTableHeadCell>
            <StyledTableHeadCell>Возраст&nbsp;</StyledTableHeadCell>
            <StyledTableHeadCell>Рост&nbsp;</StyledTableHeadCell>
            <StyledTableHeadCell>Вес&nbsp;</StyledTableHeadCell>
            <StyledTableHeadCell>Активность&nbsp;(г)</StyledTableHeadCell>
            <StyledTableHeadCell>Пол&nbsp;(г)</StyledTableHeadCell>
            <StyledTableHeadCell>Заказы</StyledTableHeadCell>
            <StyledTableHeadCell>Изображение</StyledTableHeadCell>
            <StyledTableHeadCell sx={{ "&:last-child,": { border: 0 } }}>
              Info
            </StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.height}</TableCell>
              <TableCell align="center">{row.weight}</TableCell>
              <TableCell align="center">{row.activity}</TableCell>
              <TableCell align="center">{row.sex}</TableCell>
              <TableCell align="center">
                {/* TODO СДЕЛАТЬ ТАБЛИЦУ ЗАКАЗОВ ПОЛЬЗОВАТЕЛЯ  */}
                <Link to={`/orders`}>
                  <StyledButton variant="contained">Заказы..</StyledButton>
                </Link>
              </TableCell>
              <TableCell>
                <StyledAvatar
                  alt="avatar"
                  src={
                    row.avatar ? `http://localhost:5000/${row.avatar}` : null
                  }
                />
              </TableCell>
              <TableCell align="center">
                {/* TODO СДЕЛАТЬ ФОРМУ/СТРАНИЦУ ПОЛЬЗОВАТЕЛЕЯ  */}
                <Link to={`/users/${row.id}`}>
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

export default AllUsersTable;
