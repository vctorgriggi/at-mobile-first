/**
 *
 */
import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BasicGrid(props) {
  return (
    <Grid container spacing={props.spacing || 2}>
      {props.items.map((item, index) => (
        <Grid
          item
          xs={props.xs || 12}
          sm={props.sm || 6}
          md={props.md || 4}
          key={index}
        >
          <Item>{item}</Item>
        </Grid>
      ))}
    </Grid>
  );
}
