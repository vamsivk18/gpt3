import React from 'react'
import './feature.css'

const Feature = ({direction,title,text}) => {
  let featureClass = direction==='row'?'feature__row':'feature__column'
  return (
    <>
        <div className={`gpt3__features-container__feature ${featureClass}`}>
          <div className='gpt3__features-container__feature-title'>
            <span className='gpt3__heading-marker'></span>
            <h1>{title}</h1>
          </div>
          <div className='gpt3__features-container__feature-text'>
            {text}
          </div>
        </div>
    </>

  )
}

export default Feature