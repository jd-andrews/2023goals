import * as React from "react";

import { FormControlLabel, Checkbox } from "@mui/material";

function Task({ task }) {
  return <FormControlLabel control={<Checkbox default />} label={task} />;
}

export default Task;
