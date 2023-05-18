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
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

export default function AuthForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [registered, setRegistered] = useState(false);
  const { users } = useContext(AppContext);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  console.log(users.map((user) => user.username));
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
    // if(registired){

    // }
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <div className="inputWrapper">
        <h1>{registered ? "Login" : "Registiration"}</h1>
        {!registered ? (
          <>
            <TextField
              required
              id="outlined-basic"
              label="fisrtname"
              sx={{ m: 1 }}
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              sx={{ m: 1 }}
              variant="outlined"
              fullWidth
              label="lastname"
            />
            <TextField
              required
              sx={{ m: 1 }}
              variant="outlined"
              fullWidth
              label="phone"
              type="number"
            />
            <TextField
              required
              sx={{ m: 1 }}
              variant="outlined"
              fullWidth
              label="city"
            />
            <TextField
              required
              sx={{ m: 1 }}
              variant="outlined"
              fullWidth
              label="email"
              type="email"
            />
          </>
        ) : (
          <></>
        )}
        <TextField
          required
          sx={{ m: 1 }}
          variant="outlined"
          fullWidth
          label="username"
        />
        {/* <TextField required variant="outlined" label="password" /> */}
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
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
              id="outlined-adornment-password"
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
