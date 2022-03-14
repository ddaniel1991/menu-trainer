import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import FlashcardBack from './FlashcardBack'
import FlashcardFront from './FlashcardFront'
import { Button,ButtonGroup, Box, Container } from '@mui/material'

const FlashCard = ({dishes}) => {
    
    console.log({dishes});

    const [flipped,setFlipped] = useState(false)
    const [index, setIndex] = useState(0);
    const dishData = [...dishes]

    console.log(dishData);

    //function to cycle through dish indices
    const handleCardCycle = (increment) => {

        if(index <= 0 && increment < 0) {
            setIndex(dishData.length-1);
        } 
        else if(index >= dishData.length - 1 && increment > 0) {
            setIndex(0)
        }
        else {
            setIndex(index + increment)
        }
    }
    
  return (
      
    <div>
        
        <Container>
            <ButtonGroup className='mt-4' margin='normal'>
                <Button onClick={() => handleCardCycle(-1)} variant='contained' color='error'>Back</Button>
                <Button onClick={() => setFlipped((prev) => !prev)} variant='contained'>Flip</Button>
                <Button onClick={() => handleCardCycle(1) } variant='contained' color='success'>Next</Button>
            </ButtonGroup>    
        </Container>
        <Container>  
            <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                    <div>
                        <FlashcardFront dish={dishes[index]} />
                    </div>
                    <div>
                        <FlashcardBack dish={dishes[index]} />
                    </div>
            </ReactCardFlip>
        </Container>    


        </div>


  )}

export default FlashCard
