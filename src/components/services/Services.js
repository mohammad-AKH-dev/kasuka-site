import React from "react";

import "./Services.css";
import ServiceBox from "../service-box/ServiceBox";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-title__wrapper">
        <h5 className="subtitle">خدمات</h5>
        <h2 className="title">خدمات ما را بررسی کنید</h2>
      </div>
      <div className="service-boxes__wrapper">
       <ServiceBox />
       <ServiceBox />
       <ServiceBox />
       <ServiceBox />
       <ServiceBox />
       <ServiceBox />
      </div>
    </section>
  );
}
