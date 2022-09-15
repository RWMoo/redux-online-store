import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { IconButton } from "@chakra-ui/react";
import { SignOut } from "phosphor-react";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout()).then(({ error }) => {
      error ? toast.error(error.message) : toast.info("You have logged out");
    });
  };

  return (
    <IconButton
      onClick={logoutHandler}
      aria-label="Account"
      icon={<SignOut />}
    />
  );
};

export default LogoutButton;
