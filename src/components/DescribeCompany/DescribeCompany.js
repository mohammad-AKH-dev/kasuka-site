import React from 'react'
import CompanyBox from '../CompanyBox/CompanyBox'

import './DescribeCompany.css'

export default function DescribeCompany() {
  return (
    <section className='company-section'>
        <div className="container">
          <div className='row company-content__wrapper'>
            <div className='col-5 company-content-right__section'>
                <img className='company-conetnt-right__img' src="https://hivalearn.ir/templates/kasuka/assets/img/counts-img.jpg" alt="" />
            </div>
            <div className='col-7 company-content-left__section'>
                <h2 className='title mx-w'>
                شایسته ترین لذت را به هر حال ارائه
                 می دهد
                </h2>
                <p className='company-content-left__text'>
                خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ،
                 اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
                </p>
                <div className='row company-boxes__wrapper'>
                <CompanyBox/>
                <CompanyBox/>
                <CompanyBox/>
                <CompanyBox/>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}
