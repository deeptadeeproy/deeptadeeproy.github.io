import React from "react";
import { HashLink } from "react-router-hash-link";

function Navlink({ name, link, clickFn }) {
  return <a href={link}>{name}</a>;
}

export default Navlink;
