import React from "react";
import "./Header.scss";
import MainLogo from "../../assets/icons/logo";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-alignment">
          <NavLink to={"/"}>
            <div className="main-logo">
              <MainLogo />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
