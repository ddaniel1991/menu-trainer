import React from 'react'
import FoodTableItem from './FoodTableItem'
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow, Paper, Container } from '@mui/material';
import dishes from './food.json'
import QuizMeButton from './QuizMeButton';


function FoodTable() {
    console.log({dishes})

    return (
        <Container>

            <TableContainer margin='normal' component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                        <TableCell />
                        <TableCell>#</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="left">Add To Quiz</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dishes.map((dish) => (
                          <FoodTableItem key={dish.id} dish={dish} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
  }

export default FoodTable;
