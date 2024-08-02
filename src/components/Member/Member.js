import React from 'react'

import './Member.css'

export default function Member() {
  return (
    <div className='col-3 team-member'>
      <div className="team-member-img__wrapper">
      <img className='team-member__img' src="https://hivalearn.ir/templates/kasuka/assets/img/team/team-3.jpg" alt="" />
      <div className='team-member-socials__wrapper'>
      <div className='fa-icon__wrapper'>
      <i className="fa-brands fa-instagram"></i>
      </div>
      <div className='fa-icon__wrapper'>
        <i className="fa-brands fa-linkedin"></i>
      </div>
      <div className='fa-icon__wrapper'>
        <i className="fa-brands fa-facebook"></i>
      </div>
      <div className='fa-icon__wrapper'>
        <i className="fa-brands fa-twitter"></i>
      </div>
      </div>
      </div>
      <div className='team-member__details'>
        <div className="team-member__name">
        ویلیام اندرسون
        </div>
        <div className="team-member__position">
        مدیر ارشد اجرایی
        </div>
      </div>
    </div>
  )
}
