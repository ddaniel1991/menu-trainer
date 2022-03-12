import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import FlashcardBack from './FlashcardBack'
import FlashcardFront from './FlashcardFront'
import { Button,ButtonGroup, Box, Paper } from '@mui/material'
import dishes from '../components/food.json'

const FlashCard = () => {
    
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
        <Box
            sx={{
                display: 'flex-center',
                '& > :not(style)': {
                    m: 1,
                    width: '70%',
                    height: '20em',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                },
            }}
        >
            <Paper elevation={3}>
                
                <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                        <div>
                            <FlashcardFront dish={dishes[index]} />
                            <button onClick={() => setFlipped((prev) => !prev)}> Flip</button>
                        </div>
                        <div>
                            <FlashcardBack dish={dishes[index]} />
                            <button onClick={() => setFlipped((prev) => !prev)}>Flip</button>
                        </div>
                </ReactCardFlip>
            </Paper>
        </Box>

        <ButtonGroup margin='normal'>
            <Button onClick={() => handleCardCycle(-1)} variant='contained' color='error'>Back</Button>
            <Button onClick={() => handleCardCycle(1) } variant='contained' color='success'>Next</Button>
        </ButtonGroup>    </div>


  )}

export default FlashCard
