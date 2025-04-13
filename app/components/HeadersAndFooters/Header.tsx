import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <header className='header'>
        <div id='title-bg-cover'>
            <h1>Learn How to Draw</h1>
            <h3>Use the power of AI to improve your skills.</h3>
        </div>
        <div className="wave">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z" fill='rgba(0, 4, 55, 1)'></path>
            </svg>
        </div>
    </header>
  )
}

export default Header