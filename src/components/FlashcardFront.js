import React from 'react'


const FlashcardFront = (dish) => {
  console.log(dish);
  return (
    <div>
       <h1>This is the front of the card</h1>
       <img fluid src={process.env.PUBLIC_URL + dish.image} alt={dish.name} />
    </div>
  )
}

export default FlashcardFront
