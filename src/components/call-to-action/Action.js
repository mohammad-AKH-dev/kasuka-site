import React from "react";

import "./Action.css";

export default function Action() {
  return (
    <section className="add-to-action__section">
      <div className="container">
        <h3 className="add-to-action__title">فراخوانی برای اقدام</h3>
        <p className="add-to-action__text">
          اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد
          سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به
          دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود
          را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
        </p>
        <button className="add-to-action__button" type="button">فراخوانی برای اقدام</button>
      </div>
    </section>
  );
}
