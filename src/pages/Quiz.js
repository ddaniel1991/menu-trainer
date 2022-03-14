import React from 'react'
import { Container } from '@mui/material'
import FlashCard from '../components/FlashCard'





const Quiz = ({dishes}) => {



  return (
    <div>
        <Container>
            <FlashCard dishes={dishes} />
        </Container>
    </div>
  )
}

export default Quiz
