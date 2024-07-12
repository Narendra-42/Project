import React from 'react'
import './HeroSection.css'
const HeroSection = () => {
  return (
    
    <div className='hero'>
        <div className='intro'>
        <h1>Welcome to <span>SpeakerHub.</span></h1>
        <p>A place to find best music players.
        explore and find all available devices </p>
        <button>
            Explore
        </button>
        </div>
        <div className='hero-img'>
            <img src="./speakers.png" alt="" srcset="" />
        </div>

    </div>
  )
}

export default HeroSection