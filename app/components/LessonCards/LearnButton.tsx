'use client'
import React from 'react'
import './styles.css'

interface LearnButtonProps {
    instructionId: string;
}

function goToLesson(instructionId: string) {
    console.log(instructionId)

}

const LearnButton = (props: LearnButtonProps) => {
  return (
    <>
        <button className='learn-button' onClick={() => goToLesson(props.instructionId)}>Learn now</button>
    </>
  )
}

export default LearnButton