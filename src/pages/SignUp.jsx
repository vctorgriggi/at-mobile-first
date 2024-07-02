import * as React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CircularIndeterminate from "../components/Loading";
import BasicTextField from "../components/TextField";
import FeedbackSnackbar from "../components/Alert";
import LetterAvatars from "../components/Avatar";
import BasicButton from "../components/Button";
import Types from "../components/Typography";
import { signUp } from "../utils/auth";

const defaultTheme = createTheme();

export default function SignUp() {
  const [isLoadingAnimation, setIsLoadingAnimation] = React.useState(false);

  /* snackbar feedback */
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [severitySnackbar, setSeveritySnackbar] = React.useState("warning");
  const [messageSnackbar, setMessageSnackbar] = React.useState("");

  const handleOpenSnackbar = (props) => {
    setSeveritySnackbar(props.severity);
    setMessageSnackbar(props.message);
    setOpenSnackbar(true);
  };

  /* submitting action */
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      setIsLoadingAnimation(true);
      const user = await signUp(data.get("email"), data.get("password"));
      console.log(user);
      navigate("/");
    } catch (error) {
      console.error(`error on sign up: ${error.message}`);
      handleOpenSnackbar({
        severity: "error",
        message: error.message,
      });
    } finally {
      setIsLoadingAnimation(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LetterAvatars>
            <LockOutlinedIcon />
          </LetterAvatars>
          <Types variant="h6">Criar uma conta</Types>
          <Types variant="subtitle1">senectus et netus et malesuada</Types>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <BasicTextField
                  required
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <BasicTextField
                  required
                  id="password"
                  label="Senha"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <BasicButton
              type="submit"
              fullWidth
              disabled={isLoadingAnimation}
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoadingAnimation && (
                <CircularIndeterminate size={25} color="inherit" />
              )}
              {!isLoadingAnimation && "Sign Up"}
            </BasicButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/sign-in" variant="body2">
                  Já tem uma conta? Faça logon.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <FeedbackSnackbar
          open={openSnackbar}
          severity={severitySnackbar}
          message={messageSnackbar}
          onClose={() => setOpenSnackbar(false)}
        />
      </Container>
    </ThemeProvider>
  );
}
