import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-lists">
          <div className="col-3 footer-details-list">
            <div className="footer-logo__wrapper">
              <img
                src="https://hivalearn.ir/templates/kasuka/assets/img/logo.png"
                alt=""
              />
              <h3 className="footer-logo__title">Kasuka</h3>
            </div>
            <div className="footer-details">
              <p className="footer-location">تهران خیابان آزادی</p>
              <p className="footer-contact">تلفن: 01234567895</p>
              <p className="footer-email">ایمیل: info@example.com</p>
            </div>
            <div className="footer-socials">
              <div className="footer-social">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="footer-social">
                <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className="footer-social">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className="footer-social">
                <i class="fa-brands fa-telegram"></i>
              </div>
              <div className="footer-social">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="col-2 footer-links-list">
            <h3 className="footer-links__title">لینک های مفید</h3>
            <ul className="footer-links__list">
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  خانه
                </a>
              </li>
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  درباره ی ما
                </a>
              </li>
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  خدمات
                </a>
              </li>
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  شرایط استفاده از خدمات
                </a>
              </li>
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  سیاست حفظ حریم خصوصی
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2 footer-links-list">
            <h3 className="footer-links__title">خدمات ما</h3>
            <ul className="footer-links__list">
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  طراحی وب سایت
                </a>
              </li>
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  توسعه وب
                </a>
              </li>
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  مدیریت تولید
                </a>
              </li>
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  بازار یابی
                </a>
              </li>
              <li className="footer-item">
                <i class="fa-solid fa-angle-left"></i>
                <a href="#" className="footer-link">
                  طراحی گرافیک
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4 footer-links-list">
            <h3 className="footer-links__title">خبرنامه ما</h3>
            <p className="footer-text">
              با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
              بود
            </p>
            <div className="footer-input__wrapper">
              <button className="footer-input__btn" value="دنبال کردن">
                دنبال کردن
              </button>
              <input type="email" className="footer-input" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <h4 className="footer-end__title">Kasukaهمه حقوق محفوظ است</h4>
        <p className="footer-author">طراحی شده توسط <a href="#" className="footer-author__link">mohammad:)</a></p>
      </div>
    </footer>
  );
}
