import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function FloatingActionButton() {
  return (
    <Link to="/form" style={{ textDecoration: "none" }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
}
