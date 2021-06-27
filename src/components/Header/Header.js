import React from "react";
import { HeaderBack, Logo } from "./styles";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <HeaderBack>
      <Logo src={logo} />
    </HeaderBack>
  );
}
