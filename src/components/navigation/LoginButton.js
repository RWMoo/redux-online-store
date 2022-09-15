import { IconButton, Link } from "@chakra-ui/react";
import { SignIn } from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link as={NavLink} to="/login">
      <IconButton aria-label="Account" icon={<SignIn />} />
    </Link>
  );
};

export default LoginButton;
