'use client'
import React from 'react'
import styles from './LessonCards.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

interface LearnButtonProps {
    instructionId: string;
}

const LearnButton = (props: LearnButtonProps) => {

  return (
    <>
        <Link className={styles.learnButton} href={`/instructions?topic=${props.instructionId}`}>
            Learn now
        </Link>
    </>
  )
}

export default LearnButton