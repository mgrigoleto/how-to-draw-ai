import React from 'react'
import styles from './LessonCards.module.css'

interface RatingStarsProps {
    difficultyLevel: number;
}

function filledStars(difficultyLevel: number) {
    let stars = ''
    for (let i = 0; i < difficultyLevel; i++) {
        stars += '⬤ '
    }
    return stars
}

function emptyStars(difficultyLevel: number) {
    let stars = ''
    for (let i = difficultyLevel; i < 5; i++) {
        stars += '⬤ '
    }
    return stars
}

const RatingStars = (props: RatingStarsProps) => {
  return (
    <div>
        <b className={styles.stars}>Difficulty level: </b><span className={styles.stars}>{filledStars(props.difficultyLevel)}</span><span className={styles.emptyStars}>{emptyStars(props.difficultyLevel)}</span>
    </div>
  )
}

export default RatingStars