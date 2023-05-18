import React from "react";
import AuthForm from "../components/AuthForm";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

export default function Authentication() {
  return (
    <div>
      <div className="links">
        <Breadcrumbs>
          <Link to={"/"}>All products</Link>
          <Link className="active">Authentication</Link>
        </Breadcrumbs>
      </div>
      <AuthForm />
    </div>
  );
}
