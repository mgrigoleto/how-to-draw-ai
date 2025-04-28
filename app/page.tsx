import React from 'react'
import { fetchLearningOptions } from './services/learningOptionsService'
import LessonCard from './components/LessonCards/LessonCard'
import Header from './components/HeadersAndFooters/Header'
import Footer from './components/HeadersAndFooters/Footer'
import { LearningOption } from './types'
import styles from './MainPage.module.css'

const DrawingPage = async () => {
  const learningOptions: LearningOption[] = await fetchLearningOptions() ?? []

  return (
    <>
      <div className={styles.pageContainer}>
        <Header title='Learn How to Draw' subtitle='Use the power of AI to improve your skills.' />
        <div className={styles.cardsContainer}>
          {learningOptions.map((object) => (
            <LessonCard
              title={object.title}
              instructionId={object.instructionId}
              difficultyLevel={object.difficultyLevel}
              description={object.description}
              key={object.instructionId}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DrawingPage
