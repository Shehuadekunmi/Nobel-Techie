import React from 'react'
import { Link } from 'react-router'

const Pop = () => {
  return (
    <div className='pop'>
      <span>Publication Successful</span>


      <Link to='/adminpage'><button className='btn'>Continue</button></Link>
    </div>
  )
};

export default Pop
