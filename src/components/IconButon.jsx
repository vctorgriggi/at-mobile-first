import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";

function IconButtons(props) {
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
