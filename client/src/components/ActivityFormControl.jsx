import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Chip, InputLabel } from "@mui/material";

import {
  AVERAGE_ACTIVITY,
  HIGH_ACTIVITY,
  LOW_ACTIVITY,
  VERY_HIGH_ACTIVITY,
  VERY_LOW_ACTIVITY,
  VERY_LOW_ACTIVITY_LABEL,
  LOW_ACTIVITY_LABEL,
  AVERAGE_ACTIVITY_LABEL,
  HIGH_ACTIVITY_LABEL,
  VERY_HIGH_ACTIVITY_LABEL,
  BLUE,
  GREEN,
  PURPLE,
  RED,
  WHITE,
  LIGHTGREEN,
} from "../constants";

const ActivityFormControl = ({ formik }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="standard">
      <InputLabel id="select-activity">Активность</InputLabel>
      <Select
        labelId="select-activity"
        id="activity"
        name="activity"
        value={formik.values.activity}
        label="activity"
        onChange={formik.handleChange}
      >
        <MenuItem value={VERY_LOW_ACTIVITY}>
          <Chip
            label={VERY_LOW_ACTIVITY_LABEL}
            sx={{ backgroundColor: RED, color: WHITE }}
          />
        </MenuItem>
        <MenuItem value={LOW_ACTIVITY}>
          <Chip
            label={LOW_ACTIVITY_LABEL}
            sx={{ backgroundColor: PURPLE, color: WHITE }}
          />
        </MenuItem>
        <MenuItem value={AVERAGE_ACTIVITY}>
          <Chip
            label={AVERAGE_ACTIVITY_LABEL}
            sx={{ backgroundColor: BLUE, color: WHITE }}
          />
        </MenuItem>
        <MenuItem value={HIGH_ACTIVITY}>
          <Chip
            label={HIGH_ACTIVITY_LABEL}
            sx={{ backgroundColor: LIGHTGREEN, color: WHITE }}
          />
        </MenuItem>
        <MenuItem value={VERY_HIGH_ACTIVITY}>
          <Chip
            label={VERY_HIGH_ACTIVITY_LABEL}
            sx={{ backgroundColor: GREEN, color: WHITE }}
          />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ActivityFormControl;
