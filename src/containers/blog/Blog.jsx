import React from 'react'
import './blog.css'
import { blog01,blog02,blog03,blog04,blog05 } from './imports'
import {Article} from '../../components'
const Blog = () => {
  return (
    <div className='gpt3__blog section__margin' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article image={blog01} date={"Jan 10,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article image={blog02} date={"Jan 10,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
          <Article image={blog03} date={"Jan 10,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
          <Article image={blog04} date={"Jan 10,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
          <Article image={blog05} date={"Jan 10,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
        </div>
      </div>
    </div>
  )
}

export default Blog