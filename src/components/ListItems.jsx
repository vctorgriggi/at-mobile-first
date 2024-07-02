import * as React from "react";
import { Link } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import ArticleIcon from "@mui/icons-material/Article";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <HomeIcon style={{ color: "var(--gray-400)" }} />
      </ListItemIcon>
      <Typography
        sx={{
          color: "var(--gray-400)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Home
      </Typography>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ color: "var(--gray-400)" }}>
      Repertórios salvos
    </ListSubheader>
    <ListItemButton component={Link} to="/list">
      <ListItemIcon>
        <ArticleIcon style={{ color: "var(--gray-400)" }} />
      </ListItemIcon>
      <Typography
        sx={{
          color: "var(--gray-400)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Lista
      </Typography>
    </ListItemButton>
    <ListItemButton component={Link} to="/form">
      <ListItemIcon>
        <ArticleIcon style={{ color: "var(--gray-400)" }} />
      </ListItemIcon>
      <Typography
        sx={{
          color: "var(--gray-400)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Formulário
      </Typography>
    </ListItemButton>
  </React.Fragment>
);
