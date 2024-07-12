import React from 'react'
import './CircleCard.css'

const Circlecard = ({title,image}) => {
  return (
    <div className='circle-card'>
        <img src={`./cats/${image}.webp`} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default Circlecard