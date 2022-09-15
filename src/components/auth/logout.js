import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { toast } from "react-toastify";

const Logout = () => {
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout()).then(({ error }) => {
      error ? toast.error(error.message) : toast.info("You have logged out");
    });
  };

  return (
    <button type="submit" onClick={logoutHandler}>
      Sign Out
    </button>
  );
};

export default Logout;
