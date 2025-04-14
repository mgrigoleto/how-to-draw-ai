'use client'
import React from 'react'
import './styles.css'
import RatingStars from '../LessonCards/RatingStars'
import { FaArrowCircleRight  } from "react-icons/fa";
import { useState } from 'react'
import BookPage from './BookPage';

const instructions = [
  {
    title: "Step 1: Set Up Your Drawing Space",
    description: "Grab a pencil, eraser, ruler, and paper (or a tablet if you’re drawing digitally). Sit in a comfortable, well-lit area. Warm up by drawing straight lines, curves, and loops to loosen your hand.",
    image: "<IMAGE_URL_FOR_STEP_1>"
  },
  {
    title: "Step 2: Practice Straight and Curved Lines",
    description: "Draw horizontal, vertical, and diagonal lines. Practice drawing circles and arcs freehand. Focus on control and consistency — don’t worry about perfection yet.",
    image: "<IMAGE_URL_FOR_STEP_2>"
  },
  {
    title: "Step 3: Draw Simple Shapes",
    description: "Start with squares and rectangles using your ruler for precision. Then, try drawing them freehand. Move on to triangles (equilateral, isosceles, etc.) and circles.",
    image: "<IMAGE_URL_FOR_STEP_3>"
  },
  {
    title: "Step 4: Break Down Real Objects into Shapes",
    description: "Look around and identify basic shapes in real objects (e.g., a cup = cylinder, a book = rectangle). Try sketching objects using only basic shapes to build their structure.",
    image: "<IMAGE_URL_FOR_STEP_4>"
  },
  {
    title: "Step 5: Practice with Shading and Perspective",
    description: "Add light shading to your shapes to give them depth (e.g., make a circle look like a sphere). Experiment with simple 3D forms: cubes, cones, cylinders, and pyramids. Practice drawing these shapes from different angles.",
    image: "<IMAGE_URL_FOR_STEP_5>"
  }
]

const topic = {
  "title": "Basic shapes",
  "instructionId": "basic-shapes",
  "difficultyLevel": 1,
  "description": "Learn to draw simple geometric shapes like circles, squares, and triangles — the foundation of all drawing."
}

const InstructionBook = () => {

  const [showCape, setShowCape] = useState(true)
  const [showPage, setShowPage] = useState(false)

  const handleCapeClick = () => {
    setShowCape(!showCape)
    setShowPage(showCape)
  }

  return (
    <>
      <div className='book-cape' style={{display: showCape ? 'flex' : 'none'}}>
        <div className='book-cape-content'>
          <h1 className='book-title'>{topic.title}</h1>
          <RatingStars difficultyLevel={topic.difficultyLevel}/>
          <p className='book-description'>{topic.description}</p>
        </div>
        <button className='start-lesson-button' onClick={() => handleCapeClick()}>START LEARNING NOW <FaArrowCircleRight style={{margin:'0 0 0 6px'}}/>
        </button>
      </div>
      <BookPage displayPage={showPage} instructions={instructions}/>
    </>
  )
}

export default InstructionBook