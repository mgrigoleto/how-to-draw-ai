import React from 'react'
import LearnButton from './LearnButton'
import './styles.css'
import RatingStars from './RatingStars';

interface LessonCardProps {
    difficultyLevel: number;
    title: string;
    instructionId: string;
    description: string;
}

const LessonCard = (props: LessonCardProps) => {
  return (
    <div className='lesson-card'>
        <div className='lesson-card-inset-container' style={{width: "40%"}}>
            <img src={`/template.png`} alt={props.title} />
        </div>
        <div className='lesson-card-inset-container' style={{width: "60%"}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%"}}>
                <h3>{props.title}</h3>
                <RatingStars difficultyLevel={props.difficultyLevel}/>
                <p>{props.description}</p>
            </div>
            <LearnButton instructionId={props.instructionId} />
        </div>
    </div>
  )
}

export default LessonCard