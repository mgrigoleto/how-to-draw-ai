import React from 'react'
import LessonCard from '../components/LessonCard'

const learningOptions = [
  {
    title: "Basic shapes",
    instructionId: "basic-shapes"
  },
  {
    title: "Everyday objects",
    instructionId: "everyday-objects"
  },
  {
    title: "Parts of the human body",
    instructionId: "body-parts"
  },
  {
    title: "Full human figure",
    instructionId: "full-human-figure"
  },
  {
    title: "Animals",
    instructionId: "animals"
  },
  {
    title: "Landscapes and environments",
    instructionId: "landscapes-environments"
  }
]

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px 10vw",
    flexWrap: "wrap",
    minWidth: "100%",
    minHeight: "100%",
  }
}



const DrawingPage = () => {
  return (
    <>
      <div style={styles.container}>
        {learningOptions.map((object => (
          <LessonCard title={object.title} instructionId={object.instructionId} key={object.instructionId}/>
        )))}
      </div>
    </>
  )
}

export default DrawingPage