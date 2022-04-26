import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Chip, InputLabel } from "@mui/material";

import {
  MALE_SEX,
  FEMALE_SEX,
  MALE_SEX_LABEL,
  FEMALE_SEX_LABEL,
  BLUE,
  PURPLE,
  WHITE,
} from "../constants";

const SexFormControl = ({ formik }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="standard">
      <InputLabel id="select-sex">Пол</InputLabel>
      <Select
        labelId="select-sex"
        id="sex"
        name="sex"
        value={formik.values.sex}
        label="sex"
        onChange={formik.handleChange}
      >
        <MenuItem value={MALE_SEX}>
          <Chip
            label={MALE_SEX_LABEL}
            sx={{ backgroundColor: BLUE, color: WHITE }}
          />
        </MenuItem>
        <MenuItem value={FEMALE_SEX}>
          <Chip
            label={FEMALE_SEX_LABEL}
            sx={{ backgroundColor: PURPLE, color: WHITE }}
          />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SexFormControl;
