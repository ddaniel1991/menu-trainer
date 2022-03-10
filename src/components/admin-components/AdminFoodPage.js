import React from 'react'
import FoodTable from '../FoodTable'
import AddNewButton from './AddNewButton'

const AdminFoodPage = () => {
  return (
    <div>
      <AddNewButton />  
      <FoodTable />
    </div>
  )
}

export default AdminFoodPage
