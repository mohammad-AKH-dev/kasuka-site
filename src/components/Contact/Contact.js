import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact-us">
      <div className="container">
        <div className="contact-title__wrapper">
          <h5 className="subtitle">تماس با ما</h5>
          <h2 className="title">با ما تماس بگیرید</h2>
        </div>
        <div className="contact-iframe__wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40
            .7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!
            1smk!2sbg!4v1539943755621"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="contact-details">
          <div className="row contact-location">
            <div className="col-4 location-section">
              <div className="location-icon__wrapper">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="location-wrapper">
                <h4 className="location-title">مکان:</h4>
                <p className="location">تهران خیابان آزادی</p>
              </div>
            </div>
            <div className="col-4 name-input__wrapper">
              <input type="text" className="name-input" placeholder="نام" />
            </div>
            <div className="col-4 email-input__wrapper">
              <input type="email" className="email-input" placeholder="ایمیل"/>
            </div>
          </div>

          <div className="row contact-email">
            <div className="col-4 email-section">
              <div className="email-icon__wrapper">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="email-wrapper">
                <h4 className="email-title">ایمیل:</h4>
                <p className="email">info@example.com</p>
              </div>
            </div>
            <div className="col-8 desc-input__wrapper">
              <input type="text" className="desc-input" placeholder="عنوان"/>
            </div>
          </div>

          <div className="row contact-phone">
            <div className="col-4 phone-section">
              <div className="phone-icon__wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <div className="phone-wrapper">
                <h4 className="phone-title">شماره تماس:</h4>
                <p className="phone">0123467889</p>
              </div>
            </div>
            <div className="col-8 message-area-wrapper">
              <textarea className="message-text-area" placeholder="پیام"></textarea>
              <button className="send-message__btn" type="submit">ارسال پیام</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
