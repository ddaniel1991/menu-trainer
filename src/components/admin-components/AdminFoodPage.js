import React from 'react'
import AddNewButton from './AddNewButton'
import AdminTable from './AdminTable'

const AdminFoodPage = ({dishes}) => {
  return (
    <div>
      <AddNewButton />  
      <AdminTable dishes={dishes} />
    </div>
  )
}

export default AdminFoodPage
