import React from 'react'
import {Container, Table, TableContainer, TableCell,TableRow, TableHead, TableBody,Paper} from '@mui/material'
import dishes from '../food.json'
// import FoodTableItem from '../FoodTableItem'
import AdminTableItem from './AdminTableItem'

const AdminTable = () => {
  return (
    <div>
        <Container>

            <TableContainer margin='normal' component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                        <TableCell />
                        <TableCell>#</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dishes.map((dish) => (
                          <AdminTableItem key={dish.id} dish={dish} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    </div>
  )
}

export default AdminTable
