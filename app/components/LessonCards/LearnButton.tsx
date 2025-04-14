'use client'
import React from 'react'
import './styles.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

interface LearnButtonProps {
    instructionId: string;
}

const LearnButton = (props: LearnButtonProps) => {

  return (
    <>
        <Link className='learn-button' href={`/instructions?topic=${props.instructionId}`}>
            Learn now
        </Link>
    </>
  )
}

export default LearnButton