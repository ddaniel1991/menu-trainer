import React from 'react'
import DrinkTable from '../components/DrinkTable'
import QuizMeButton from '../components/QuizMeButton'

const Drinks = ({drinks}) => {
  return (
    <div>
      <h2>Drinks</h2>
      <QuizMeButton />
      <DrinkTable drinks={drinks} />
    </div>
  )
}

export default Drinks
