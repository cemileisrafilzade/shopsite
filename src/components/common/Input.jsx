import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../../context";

export default function Input({ label, content, handleChange }) {
  return (
    <FormControl sx={{ margin: "15px 0px", width: "100%" }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        input={<OutlinedInput label={label} />}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {content.map((val) => (
          <MenuItem key={val.id} disabled={val?.disable} value={val.value}>
            {val.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
