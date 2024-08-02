import React from "react";
import Navbar from "../Navbar/Navbar";
import HeaderContent from "../Header-Content/HeaderContent";

import "./Header.css";
import "../grid/grid.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-menu__wrapper">
        <div className="container">
          <Navbar />
        </div>
      </div>
          <HeaderContent/>
    </header>
  );
}
