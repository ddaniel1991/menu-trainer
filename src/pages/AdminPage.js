import React from 'react'
import { Link } from 'react-router-dom';
const AdminPage = () => {
  return (
    <div>
        <h1>This is the Admin Page!!!</h1>
        <Link to="/admin/food">Food</Link>
        <Link to="/admin/drinks">Drinks</Link>
        <Link to="/admin/add"> New Food Item</Link>



    </div>
  )
}

export default AdminPage
