import React from 'react'
import './styles.css'

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className='header'>
        <div id='title-bg-cover'>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
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