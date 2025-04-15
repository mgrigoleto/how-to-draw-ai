import React from 'react'
import styles from './HeadersAndFooters.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";



const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.wave}>
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z" fill='white'></path>
            </svg>
        </div>
        <div className={styles.footerContent}>
            <h1>The goal of this website is not, by any means, to steal or replace any professional work. This is simply an attempt to turn AI into a usefull tool in introducing the art of drawing to the people.</h1>
            <h2>Built by Maurício Grigoleto.</h2>
            <div className={styles.footerSocials} title='Contact Me'>
                <a href='https://www.linkedin.com/in/maurício-grigoleto-794366228/' target="_blank"><FaLinkedin /></a>
                <a href='https://github.com/mgrigoleto' target="_blank"><FaGithub /></a>
                <a href='mailto:grigoleto.2002@gmail.com'><SiGmail /></a>
                <a href='https://wa.me/5527992331970' target="_blank"><IoLogoWhatsapp /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer