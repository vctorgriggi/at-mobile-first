/**
 *
 */
import * as React from "react";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

export default function IconButtons(props) {
  return (
    <Tooltip title={props.tooltip || ""}>
      <IconButton
        color={props.color || "default"}
        aria-label={props.ariaLabel || "icon button"}
        disabled={props.disabled}
        onClick={props.onClick}
        {...props}
      >
        {props.icon || <AddIcon />}
      </IconButton>
    </Tooltip>
  );
}
