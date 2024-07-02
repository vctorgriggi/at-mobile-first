import Button from "@mui/material/Button";

export default function BasicButton(props) {
  return (
    <Button
      variant="contained"
      type={props.type}
      onClick={props.onClick}
      sx={{
        textTransform: "capitalize",
      }}
      disabled={props.disabled}
      fullWidth
    >
      {props.children || "Criar novo item"}
    </Button>
  );
}
