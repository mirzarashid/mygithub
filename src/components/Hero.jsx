import React, { useState } from 'react'
import Drum from './Drum'
import image from '../images/crash.png'

const Hero = () => {
  const [name,setName] =useState(image)
  return (
    <div>
      <div className='container'>
        <h1>Drum Band</h1>
      </div>
      <h4>Press Any Button</h4>
      <img src={name} alt="" className='img' />
      <Drum setName={setName}/>
    </div>
  )
}

export default Hero
