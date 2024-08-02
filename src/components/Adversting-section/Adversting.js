import React from 'react'
import AdverstingBox from '../Adversting-box/AdverstingBox'

import './Adversting.css'

export default function Adversting() {
  return (
    <section className='row adversting-section' id='adversting'>
      <div className='col-6 adversting-right__section'>
        <img  className='adversting-img' src="https://hivalearn.ir/templates/kasuka/assets/img/features.jpg" alt="" />
      </div>
      <div className='col-6 adversting-left__section'>
        <AdverstingBox/>
        <AdverstingBox/>
        <AdverstingBox/>
        <AdverstingBox/>
      </div>
    </section>
  )
}
