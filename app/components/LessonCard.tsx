import React from 'react'
import LearnButton from './LearnButton'

const styles = {
    container: {
        backgroundColor: "white",
        height: "20vh",
        width: "350px",
        borderRadius: "15px",
        boxShadow: "10px 10px 15px black",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

}

interface LessonCardProps {
    title: string;
    instructionId: string;
}

const LessonCard = (props: LessonCardProps) => {
  return (
    <div className='lesson-card'>
        <div className='lesson-card-inset-container' style={{height: "75%"}}>
            <img src={`/template.png`} alt={props.title} className='lesson-card-image' />
            <h3>{props.title}</h3>
        </div>
        <div className='lesson-card-inset-container' style={{height: "25%", justifyContent: "flex-end"}}>
            <LearnButton instructionId={props.instructionId} />
        </div>
    </div>
  )
}

export default LessonCard