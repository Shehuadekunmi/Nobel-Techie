import React from 'react'
import { Link } from 'react-router'
import img from "../assets/fr.png"
import img1 from "../assets/fr2.png"
import img2 from "../assets/fr3.png"
import img3 from "../assets/fr4.png"
import img4 from "../assets/fr5.png"
import '../style/hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className=' hono'>
        <h1>Honoring Technological Excellence</h1>
        <p>Join the global movement that celebrates innovative contributions towards technological advancement</p>

        <Link><button>Become a Noble Techy</button></Link>
      </div>

      <div className='d-flex overflow-x-scroll mt-5 gap-3 ps-2 mx-4'>
        <img src={img} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  )
}

export default Hero
