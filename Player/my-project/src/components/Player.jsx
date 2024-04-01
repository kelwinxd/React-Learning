import React from 'react'
import { BsPlayCircle, BsSkipStartCircle, BsSkipEndCircle } from "react-icons/bs";

const Player = () => {
  return (
    <div className='flex gap-10'>
        <BsSkipStartCircle size={50} className='pointer' />
        <BsPlayCircle size={50} className='pointer'  />
        <BsSkipEndCircle  size={50} className='pointer'/>
    </div>
  )
}

export default Player