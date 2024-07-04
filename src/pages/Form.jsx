import React, { useState } from "react";

import Stack from "@mui/material/Stack";

import CircularIndeterminate from "../components/Loading";
import BasicTextField from "../components/TextField";
import FeedbackSnackbar from "../components/Alert";
import Checkboxes from "../components/Checkbox";
import BasicButton from "../components/Button";
import Panel from "../layouts/Panel";
import { fakeCreate } from "../utils/data";

export default function CreateItem() {
  const [isLoadingAnimation, setIsLoadingAnimation] = useState(false);

  /* creating action */
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleCreate = async () => {
    if (!acceptedTerms) {
      handleOpenSnackbar({
        severity: "warning",
        message: "Você precisa aceitar os termos para criar um novo item.",
      });

      return;
    }

    const newItem = { name, description };

    try {
      setIsLoadingAnimation(true);
      await fakeCreate(newItem);
      handleOpenSnackbar({
        severity: "success",
        message: "Nova adição: o conteúdo foi criado conforme solicitado.",
      });
      setName("");
      setDescription("");
      setAcceptedTerms(false);
    } catch (error) {
      console.error(`error on create: ${error.message}`);
      handleOpenSnackbar({
        severity: "error",
        message: error.message,
      });
    } finally {
      setIsLoadingAnimation(false);
    }
  };

  /* snackbar feedback */
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [severitySnackbar, setSeveritySnackbar] = React.useState("warning");
  const [messageSnackbar, setMessageSnackbar] = React.useState("");

  const handleOpenSnackbar = (props) => {
    setSeveritySnackbar(props.severity);
    setMessageSnackbar(props.message);
    setOpenSnackbar(true);
  };

  return (
    <Panel>
      <Stack direction="column" spacing={4}>
        <BasicTextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <BasicTextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Stack direction="row" alignItems="center">
          <Checkboxes
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          <label>Aceitar os termos</label>
        </Stack>
        <BasicButton onClick={handleCreate}>
          {isLoadingAnimation ? (
            <CircularIndeterminate size={25} color="inherit" />
          ) : (
            "Criar novo item"
          )}
        </BasicButton>
      </Stack>
      <FeedbackSnackbar
        open={openSnackbar}
        severity={severitySnackbar}
        message={messageSnackbar}
        onClose={() => setOpenSnackbar(false)}
      />
    </Panel>
  );
}
