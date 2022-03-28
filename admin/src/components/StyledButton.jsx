import { Button } from "@material-ui/core";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)({
  backgroundColor: "rgba(75, 15, 125, 0.7)",
  color: "white",
  "&:hover": {
    backgroundColor: "teal",
  },
});
