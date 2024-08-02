import React from "react";
import Member from "../Member/Member";

import './TeamMembers.css'

export default function TeamMembers() {
  return (
    <section className="team-members__section" id="team">
      <div className="container">
        <div className="team-members-title__wrapper">
          <h5 className="subtitle">تیم</h5>
          <h2 className="title">
          تیم ما را بررسی کنید
          </h2>
        </div>
        <div className="row team-members__wrapper">
           <Member/>
           <Member/>
           <Member/>
           <Member/>
        </div>
      </div>
    </section>
  );
}
