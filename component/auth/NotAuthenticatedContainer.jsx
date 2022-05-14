import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "notistack";

import { fetcher } from "@utils/clientFuncs";
import Typography from "@mui/material/Typography";
import { ButtonGroup, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const NotAuthenticated = () => {
  const [authMode, setAuthMode] = useState("signin");

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const [showPassword, setShowPassword] = useState(false);

  const signinHandler = () => {
    if (authMode !== "signin") return setAuthMode("signin");
  };

  const signupHandler = async () => {
    if (authMode !== "signup") return setAuthMode("signup");
    fetcher;

    const { status } = await fetcher("/profile/signup", { password, email, name });

    if (status) {
      enqueueSnackbar("A verification link has been sent to your mail", { variant: "info" });
    } else {
      enqueueSnackbar("Please wait, while we translate", { variant: "info" });
    }

    // chukwuemeka@viewcrunch.com
  };

  const resetHandler = () => {
    if (authMode !== "reset") return setAuthMode("reset");
  };

  return (
    <>
      <Typography variant="body1" sx={{ letterSpacing: 1, fontWeight: "bold", textAlign: "center", px: 1, py: 2 }}>
        {authMode === "signin" ? "SIGN IN TO YOUR ACCOUNT" : authMode === "signup" ? "WELCOME TO OPENTRANSLATION" : "FORGOT PASSWORD"}
      </Typography>
      {authMode === "signup" && (
        <TextField
          id="name"
          fullWidth
          label="Name"
          value={name}
          variant="outlined"
          sx={{ marginBottom: 1 }}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <TextField
        id="email"
        fullWidth
        label="eMail"
        value={email}
        variant="outlined"
        sx={{ marginBottom: 1 }}
        onChange={(e) => setEmail(e.target.value)}
      />

      {authMode !== "reset" && (
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            autoComplete="ViewCrunch"
            sx={{ marginBottom: 1 }}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      )}
      <ButtonGroup fullWidth>
        <Button variant="contained" color="info" sx={{ textTransform: "capitalize" }} onClick={signupHandler}>
          Sign Up
        </Button>

        {authMode === "reset" ? (
          <Button variant="contained" sx={{ textTransform: "capitalize" }} onClick={resetHandler}>
            Reset
          </Button>
        ) : (
          <Button variant="contained" sx={{ textTransform: "capitalize" }} onClick={signinHandler}>
            Sign In
          </Button>
        )}
      </ButtonGroup>

      {/* <Link href="/auth/resetPassword" > */}
      {authMode !== "reset" ? (
        <Typography
          onClick={resetHandler}
          variant="body1"
          fontSize={13}
          sx={{ letterSpacing: 1, fontWeight: "bold", textAlign: "center", p: 1, cursor: "pointer" }}>
          Forgot your password?
        </Typography>
      ) : (
        <Typography
          variant="body1"
          fontSize={13}
          sx={{ letterSpacing: 1, fontWeight: "bold", textAlign: "center", p: 1, cursor: "pointer" }}>
          Please enter your email address
        </Typography>
      )}
    </>
  );
};

export default NotAuthenticated;
