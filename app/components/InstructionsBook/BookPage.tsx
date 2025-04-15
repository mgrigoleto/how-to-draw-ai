import React from 'react'
import styles from './InstructionsBook.module.css'
import { useState } from 'react'
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";


interface BookPageProps {
    instructions: {
        title: string
        description: string
        image: string
    }[]
    displayPage?: boolean
}

const BookPage = (props: BookPageProps) => {

    const [currentPage, setCurrentPage] = useState(0)


  return (
    props.displayPage &&
    <>
        <div className={styles.page} style={{display: props.displayPage ? 'flex' : 'none'}}>
            <div className={styles.pageContent}>
                <h1>{props.instructions[currentPage].title}</h1>
                <p>{props.instructions[currentPage].description}</p>
            </div>
            <div className={styles.pageButtonsLine}>
                {currentPage === 0 && <span></span>}
                <button className={styles.pageButton} style={{display: currentPage === 0 ? 'none' : 'flex'}} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}><FaArrowLeft /></button>
                <button className={styles.pageButton} style={{display: currentPage === props.instructions.length - 1 ? 'none' : 'flex'}} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === props.instructions.length - 1}><FaArrowRight /></button>
            </div>
        </div>
    </>
  )
}

export default BookPage