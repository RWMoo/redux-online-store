import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })).then(({ error, payload }) => {
      const displayName = payload.user.displayName || "";
      error
        ? toast.error(error.message)
        : toast.info(`Welcome back ${displayName}`);
    });
  };

  return (
    <form>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={loginHandler}>
        Sign In
      </button>
    </form>
  );
};

export default Login;
