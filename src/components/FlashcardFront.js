import React from 'react'
import {Col, Container} from 'react-bootstrap'


const FlashcardFront = ({dish}) => {
  console.log(dish);
  return (
    <div>
      <Container>
        <h3>{dish.name}</h3>
      </Container>
      <Container>
        <img className="mb-4" height='30%' width='60%' src={process.env.PUBLIC_URL + dish.image} alt={dish.name} />
      </Container>
    </div>
  )
}

export default FlashcardFront
