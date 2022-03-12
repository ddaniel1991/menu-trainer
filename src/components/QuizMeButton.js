import React from 'react'
import {Button, Container} from '@mui/material'

const QuizMeButton = () => {
  return (
    <div>   
      <Container className='mb-3' margin='normal' align='right'>
        <Button href='/quiz' variant='contained' color='success'>Quiz Me</Button>
      </Container>
    </div>
  )
}

export default QuizMeButton
