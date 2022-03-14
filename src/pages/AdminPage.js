import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
const AdminPage = () => {
  return (
    <div>
        <Container>
          <h1>Admin Dashboard</h1>
          
          <Link to="/admin/food">Food</Link>
          <hr/>
          <Link to="/admin/drinks">Drinks</Link>
          <hr/>
          <Link to="/admin/add"> New Food Item</Link>
        </Container>


    </div>
  )
}

export default AdminPage
