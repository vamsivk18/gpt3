import React from 'react'
import './possibilities.css'
import possibilities from '../../assets/possibility.png'

const Possibilities = () => {
  return (
    <div className='gpt3__possibilities section__padding' id='possibility'>
      <div className='gpt3__possibilities-image'>
        <img src={possibilities} alt="Possibilities" />
      </div>
      <div className='gpt3__possibilities-container'>
        <p className='gpt3__possibilities-container__earlyaccess-1'>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='gpt3__possibilities-container__p'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='gpt3__possibilities-container__earlyaccess-2'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibilities