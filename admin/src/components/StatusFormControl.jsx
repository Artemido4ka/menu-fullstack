import {
  COOKING_LABEL,
  GREEN,
  ORDERED_LABEL,
  READY_LABEL,
  CANCELED_LABEL,
  BLUE,
  RED,
  PURPLE,
  WHITE,
  ORDERED,
  COOKING,
  READY,
  CANCELED,
} from "../constants";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Chip, InputLabel } from "@mui/material";

const StatusFormControl = ({ formik }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="standard">
      <InputLabel id="select-label">Статус</InputLabel>
      <Select
        labelId="select-label"
        id="status"
        name="status"
        value={formik.values.status}
        label="status"
        onChange={formik.handleChange}
      >
        <MenuItem value={ORDERED}>
          <Chip
            label={ORDERED_LABEL}
            sx={{ backgroundColor: PURPLE, color: WHITE }}
          />
        </MenuItem>
        <MenuItem value={COOKING}>
          <Chip label={COOKING_LABEL} sx={{ backgroundColor: BLUE, color: WHITE }} />
        </MenuItem>
        <MenuItem value={READY}>
          <Chip label={READY_LABEL} sx={{ backgroundColor: GREEN, color: WHITE }} />
        </MenuItem>
        <MenuItem value={CANCELED}>
          <Chip label={CANCELED_LABEL} sx={{ backgroundColor: RED, color: WHITE }} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusFormControl;
