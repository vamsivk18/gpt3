import React from 'react'
import './whatGPT3.css'
import {Feature} from '../../components/index'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__wgpt3 section__margin' id="wgpt3">
      <div className='gpt3__wgpt3-feature'>
        <Feature direction="row" title="What is GPT3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className='gpt3__wgpt3-heading'>
        <h1 className='gradient__text'>The possiblilties are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__wgpt3-container'>
        <Feature direction="column" title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Feature direction="column" title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature direction="column" title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature direction="column" title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature direction="column" title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
      </div>
    </div>
  )
}

export default WhatGPT3