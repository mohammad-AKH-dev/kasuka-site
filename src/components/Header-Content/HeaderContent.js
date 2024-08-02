import React from "react";
import Box from "../Box/Box";
import './HeaderContent.css'

export default function HeaderContent() {
  return (
    <section className="header-content-section" id="home">
      <div className="container">
      <div className="header-content__title">
        <h1 className="header-title">
          راه حل های قدرتمند دیجیتال با
          <span className="header-span">Kasuka</span>
        </h1>
        <h4 className="header-subtitle">
          ما تیمی از بازاریابان با استعداد دیجیتال هستیم
        </h4>
        <div className="boxes-wrapper">
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
        </div>
      </div>
      </div>
    </section>
  );
}
