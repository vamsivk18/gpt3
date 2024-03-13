import React, { useEffect, useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'
// BEM -> Block Element Modifier

const Menu = () => {
  return(  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>)
}

const Navbar = () => {
  useEffect(()=>{
    document.addEventListener('click', function(event) {
      var excludedClass = 'gpt3__navbar-toggle';
      if (!event.target.closest('.' + excludedClass)) {
        setToggleMenu(false)
      }
    })
  },[])
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu></Menu>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button>Sign Up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu ? <>
                          <RiCloseLine className='gpt3__navbar-toggle' color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
                          <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className='gpt3__navbar-menu_container-links '>
                              <Menu/>
                            </div>
                            <div className='gpt3__navbar-menu_container-sign'>
                              <p>Sign in</p>
                              <button>Sign Up</button>
                            </div>
                          </div>
                        </>
                        :
                          <RiMenu3Line className='gpt3__navbar-toggle' color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
           }
        </div>
      </div>
    </div>
  )
}

export default Navbar
