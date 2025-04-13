import React from 'react'
import LessonCard from './components/LessonCards/LessonCard'
import './styles.css'
import Header from './components/HeadersAndFooters/Header';
import Footer from './components/HeadersAndFooters/Footer';

const learningOptions = [
  {
    "title": "Basic shapes",
    "instructionId": "basic-shapes",
    "difficultyLevel": 1,
    "description": "Learn to draw simple geometric shapes like circles, squares, and triangles — the foundation of all drawing."
  },
  {
    "title": "Everyday objects",
    "instructionId": "everyday-objects",
    "difficultyLevel": 2,
    "description": "Practice sketching common items like cups, books, and furniture to build observation and proportion skills."
  },
  {
    "title": "Parts of the human body",
    "instructionId": "body-parts",
    "difficultyLevel": 3,
    "description": "Focus on individual body parts such as hands, feet, eyes, and mouths, emphasizing structure and anatomy."
  },
  {
    "title": "Full human figure",
    "instructionId": "full-human-figure",
    "difficultyLevel": 5,
    "description": "Learn to draw the complete human body in proportion, including poses, gestures, and anatomy."
  },
  {
    "title": "Animals",
    "instructionId": "animals",
    "difficultyLevel": 4,
    "description": "Explore drawing a variety of animals by understanding their forms, movement, and unique features."
  },
  {
    "title": "Landscapes and environments",
    "instructionId": "landscapes-environments",
    "difficultyLevel": 3,
    "description": "Develop skills in drawing natural and urban scenes, including perspective, depth, and composition."
  }
];

const DrawingPage = () => {
  return (
    <>
      <div  className='page-container'>
        <Header/>
        <div className='cards-container'> 
          {learningOptions.map((object => (
            <LessonCard title={object.title} instructionId={object.instructionId} difficultyLevel={object.difficultyLevel} description={object.description} key={object.instructionId}/>
          )))}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default DrawingPage