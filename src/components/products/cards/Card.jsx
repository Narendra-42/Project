import React from 'react'
import './Card.css'

const Card = ({title,price,orgprice,image,discount, playblack, rating, sales}) => {
  return (
    <div className='card-component'>
        <img src={`./buds/${image}.webp`} alt="" />
        <h3>{title}</h3>
        <p>&#8377;{price} <strike>{orgprice}</strike><span>{discount}%off</span></p>
        <p className='banner'>{playblack} Hours Playback</p>
        <div className='bottom'>
            <p>&#9733; {rating} | {sales} </p>
            <button>Add to Cart</button>
        </div>

    </div>
  )
}

export default Card