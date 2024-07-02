import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function LetterAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>{props.children || "V"}</Avatar>
    </Stack>
  );
}
