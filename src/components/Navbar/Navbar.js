import React from 'react'

import './Navbar.css'
import '../grid/grid.css'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <a href='#' className='nav-bar__start-link'>شروع</a>
      <div className='nav-bar__menu'>
        <ul className="nav-bar__menu-list">
          <li className="nav-bar__list-item"><a href="#home" className='nav-bar__list-link'>خانه</a></li>
          <li className="nav-bar__list-item"><a href="#about-us" className='nav-bar__list-link nav-bar__list-link--active'>درباره ی ما</a></li>
          <li className="nav-bar__list-item"><a href="#services" className='nav-bar__list-link'>خدمات</a></li>
          <li className="nav-bar__list-item"><a href="#portfolio" className='nav-bar__list-link'>نمونه کارها</a></li>
          <li className="nav-bar__list-item"><a href="#team" className='nav-bar__list-link'>تیم</a></li>
          <li className="nav-bar__list-item nav-bar__list-item--parent"><a href="#" className='nav-bar__list-link'> 
                لیست کشویی 
            <ul className="nav-bar__list-dropdown">
              <li className='nav-bar__list-dropdown-item'> لیست کشویی 1</li>
              <li className='nav-bar__list-dropdown-item'> لیست کشویی 2</li>
              <li className='nav-bar__list-dropdown-item'> لیست کشویی 3</li>
              <li className='nav-bar__list-dropdown-item'> لیست کشویی 4</li>
              <li className='nav-bar__list-dropdown-item'> لیست کشویی 5</li>
            </ul>
            </a>
            </li>
          <li className="nav-bar__list-item"><a href="#contact-us" className='nav-bar__list-link'>تماس با ما</a></li>
        </ul>
      </div>
      <div className='nav-bar__logo-wrapper'>
        <a href="#" className="nav-bar__logo-link">
          <img src="https://hivalearn.ir/templates/kasuka/assets/img/logo.png" alt="" />
          <span className='nav-bar__logo-text'>Kasuka</span>
        </a>
      </div>
    </nav>
  )
}
