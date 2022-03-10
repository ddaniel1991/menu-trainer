import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Banner = () => {
  return (
    <div>
        <Container className='align-text-center'>
            <Row>
                <Col />
                <Col>
                    <h3>Welcome to Menu Trainer!</h3>
                    <p>Please select an option to continue!</p>
                </Col>
                <Col />
            </Row>    

        </Container>
    </div>
  )
}

export default Banner
