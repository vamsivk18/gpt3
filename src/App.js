
import {Footer,Blog,Possibilities,Features,WhatGPT3,Header} from './containers'
import {Brand,CTA,Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
        <div className='gradient__bg gpt3_body'>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibilities/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>

  )
}

export default App