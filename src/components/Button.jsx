import Button from "@mui/material/Button";

export default function BasicButton(props) {
  return (
    <Button
      fullWidth
      variant="contained"
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      sx={{
        textTransform: "capitalize",
      }}
    >
      {props.children || "Criar novo item"}
    </Button>
  );
}
