import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import dropbox from '../../assets/dropbox.png'
import atlassian from '../../assets/atlassian.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-content'>
        <img src={google} alt="google" />
        <img src={dropbox} alt="google" />
        <img src={atlassian} alt="google" />
        <img src={shopify} alt="google" />
        <img src={slack} alt="google" />
      </div>
    </div>
  )
}

export default Brand