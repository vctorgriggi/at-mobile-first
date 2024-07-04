import * as React from "react";

import Checkbox from "@mui/material/Checkbox";

export default function Checkboxes(props) {
  return (
    <Checkbox checked={props.checked} disabled={props.disabled} {...props} />
  );
}
