import React from "react";

import "./TeamIntro.css";

export default function TeamMembers() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-detailes">
          <div className="team-img__wrapper">
            <img
              src="https://hivalearn.ir/templates/kasuka/assets/img/testimonials/testimonials-4.jpg"
              alt=""
            />
          </div>
          <div className="team-position">
            <h3 className="team-name">مت براندون</h3>
            <h4 className="team-job">فریلنسر</h4>
          </div>
          <div className="team-description">
          زیرا من آن کسی بودم که از درد رهایی می یافت ، درد هیچ تقصیری از بسیاری ندارد
           ، حداقل فوجیات را حداقل از طریق درد ، کار می کند.                  
          </div>
        </div>
      </div>
    </section>
  );
}
