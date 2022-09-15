import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(signup({ name, email, password })).then(({ error }) => {
      error ? toast.error(error.message) : toast.info("Account created");
    });
  };

  return (
    <form>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type="submit" onClick={registerHandler}>
        Create account
      </button>
    </form>
  );
};

export default Register;
