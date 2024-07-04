import Avatar from "@mui/material/Avatar";

export default function LetterAvatars(props) {
  return <Avatar>{props.children || "V"}</Avatar>;
}
