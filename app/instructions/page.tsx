'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import styles from './instructions.module.css'
import Header from '.././components/HeadersAndFooters/Header';
import Footer from '.././components/HeadersAndFooters/Footer';
import InstructionBook from '../components/InstructionsBook/InstructionBook';

const InstructionsPage = () => {

  const searchParams = useSearchParams()
  const topic = searchParams.get('topic') ?? ''
  

  return (
    <>
      <div className={styles.pageContainer}>
        <Header title={topic} />
          <InstructionBook />
        <Footer/>
      </div>
    </>
  )
}

export default InstructionsPage