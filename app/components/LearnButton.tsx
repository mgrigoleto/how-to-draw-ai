'use client'
import React from 'react'
import './styles.css'

interface LearnButtonProps {
    instructionId: string;
}

function goToLesson(instructionId: string) {
    // window.location.href = `/instrunctions/${instructionId}`
    console.log(`/instrunctions/${instructionId}`)

}

const LearnButton = (props: LearnButtonProps) => {
  return (
    <>
        <button className='learn-button' onClick={() => goToLesson(props.instructionId)}>Learn</button>
    </>
  )
}

export default LearnButton