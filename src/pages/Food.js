import React from 'react'
import FoodTable from '../components/FoodTable'
import QuizMeButton from '../components/QuizMeButton'

const Food = ({dishes}) => {
  return (
    <div>
      <h2>Menu Items</h2>
      <QuizMeButton />

      <FoodTable dishes={dishes}/>
    </div>
  )
}

export default Food
