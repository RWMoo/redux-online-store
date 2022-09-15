import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ name, href }) => {
  return (
    <li>
      <Link to={href}>{name}</Link>
    </li>
  );
};

export default LinkItem;
