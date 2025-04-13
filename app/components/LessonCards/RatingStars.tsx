import React from 'react'
import './styles.css'

interface RatingStarsProps {
    difficultyLevel: number;
}

function starsToDisplay(difficultyLevel: number) {
    let stars = ''
    for (let i = 0; i < difficultyLevel; i++) {
        stars += '★'
    }
    for (let i = difficultyLevel; i < 5; i++) {
        stars += '☆'
    }
    return stars

}

const RatingStars = (props: RatingStarsProps) => {
  return (
    <div>
        <b className='stars'>Difficulty level: </b><span className='stars'>{starsToDisplay(props.difficultyLevel)}</span>
    </div>
  )
}

export default RatingStars