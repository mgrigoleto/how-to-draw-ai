import React from 'react'
import './styles.css'
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
        <div className='page' style={{display: props.displayPage ? 'flex' : 'none'}}>
            <div className='page-content'>
                <h1>{props.instructions[currentPage].title}</h1>
                <p>{props.instructions[currentPage].description}</p>
            </div>
            <div className='page-buttons-line'>
                {currentPage === 0 && <span></span>}
                <button className='page-button' style={{display: currentPage === 0 ? 'none' : 'flex'}} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}><FaArrowLeft /></button>
                <button className='page-button' style={{display: currentPage === props.instructions.length - 1 ? 'none' : 'flex'}} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === props.instructions.length - 1}><FaArrowRight /></button>
            </div>
        </div>
    </>
  )
}

export default BookPage