import React from 'react'
import DrinkTable from '../DrinkTable'
import AddNewButton from './AddNewButton'

const AdminFoodPage = ({drinks}) => {
  return (
    <div>
      <AddNewButton />  
      <DrinkTable drinks={drinks} />
    </div>
  )
}

export default AdminFoodPage
