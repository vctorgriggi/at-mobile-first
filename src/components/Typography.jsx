import Typography from "@mui/material/Typography";

export default function Types(props) {
  return (
    <Typography variant={props.variant} color={props.color} align={props.align}>
      {props.children}
    </Typography>
  );
}
