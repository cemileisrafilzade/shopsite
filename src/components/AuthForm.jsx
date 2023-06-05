import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context";
import { auth, signInAuth, signUp } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function AuthForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [registered, setRegistered] = useState(false);
  // const { users } = useContext(AppContext);
  const [user, loading, error] = useAuthState(auth);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!registered) {
      if (password !== password2) {
        setErrorMsg("Password should match");
      } else {
        const result = await signUp(email, password);
        console.log(result);
        if (result.error) {
          setErrorMsg(result.error);
        }
      }
    } else if (registered) {
      const res = await signInAuth(email, password);
      if (res.error) {
        setErrorMsg(res.error);
      }
    }
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <form onSubmit={handleSubmit} action="">
      <div className="inputWrapper">
        <h1>{registered ? "Login" : "Registiration"}</h1>
        {errorMsg && (
          <Typography sx={{ color: "error.main" }}>{errorMsg}</Typography>
        )}
        {!registered ? (
          <>
            <TextField
              autoComplete="off"
              required
              sx={{ m: 1 }}
              variant="outlined"
              fullWidth
              label="fullname"
            />
            <TextField
              autoComplete="off"
              required
              sx={{ m: 1 }}
              variant="outlined"
              fullWidth
              label="phone"
              type="number"
            />
            {/* <TextField
                autoComplete="off"
                required
                sx={{ m: 1 }}
                variant="outlined"
                fullWidth
                label="city"
              /> */}
            {/* <TextField
                autoComplete="off"
                required
                value={email}
                sx={{ m: 1 }}
                variant="outlined"
                fullWidth
                label="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              /> */}
          </>
        ) : (
          <></>
        )}
        {/* <TextField
            autoComplete="off"
            required
            sx={{ m: 1 }}
            variant="outlined"
            fullWidth
            label="username"
          /> */}
        {/* <TextField autoComplete="off" required variant="outlined" label="password" /> */}
        <TextField
          autoComplete="off"
          required
          value={email}
          sx={{ m: 1 }}
          variant="outlined"
          fullWidth
          label="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            autoComplete="off"
            value={password}
            id="outlined-adornment-password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>{" "}
        {registered ? (
          ""
        ) : (
          <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              required
              autoComplete="off"
              id="outlined-adornment-password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
        )}
        <div className="btns">
          <FormControlLabel
            labelPlacement="start"
            control={
              <Checkbox
                defaultChecked
                checked={registered}
                onChange={() => setRegistered(!registered)}
              />
            }
            label={
              registered
                ? "Don't have you an account ? Sign up"
                : "Already have an account ? Login"
            }
          />
          <Button variant="outlined" type="submit">
            {registered ? "Login" : "Sign Up"}
          </Button>
        </div>
      </div>
    </form>
  );
}
