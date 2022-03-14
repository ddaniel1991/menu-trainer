import React from 'react'
import { useParams} from 'react-router-dom'
import {List, ListItem, Container, Button} from '@mui/material'
import {Col, Row} from 'react-bootstrap'



const DisplayFood = ({dishes}) => {
  const dishID = useParams();

  const dish = dishes.filter((dish) => {
    return dish.name === dishID.name
  })

  console.log({dishes});
  console.log(dishes)
  console.log(dish[0])

  return (
    <div>
      <Container>
        <h2 className="mb-3">{dish[0].name}</h2>
        <hr/>
        <img className="mb-3" src={process.env.PUBLIC_URL + dish[0].image} alt={dish[0].name} height="40%" width="70%" />
        <hr/>
        <h4>Description</h4>
        <p>{dish[0].description}</p>
        <hr/>
        <Row>
          <Col>
            <h4 className='underline'>Ingredients</h4>
            <List dense={true}>
            {
              dish[0].ingredients.map((ingredient) => (
                <ListItem id="ingredient-list">{ingredient}</ListItem>
              ))
            }
            </List>
          </Col>
          <Col>
            <h4 className='underline'>Pairs With</h4>
            <List dense={true}>
            {
              dish[0].tags.map((tag) => (
                <ListItem id="ingredient-list">{tag}</ListItem>
              ))
            }
            </List>
          </Col>
        </Row>
        <hr/>
        <Button variant="contained" color='info' href="/food">Back</Button>
      </Container>
    </div>
  )
}

export default DisplayFood
