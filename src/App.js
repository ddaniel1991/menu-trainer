import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Drinks from './pages/Drinks';
import Food from './pages/Food';
import Pairings from './pages/Pairings';
import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import AdminFoodPage from './components/admin-components/AdminFoodPage';
import AddFoodItemForm from './components/admin-components/AddFoodItemForm';
import AdminDrinkPage from './components/admin-components/AdminDrinkPage';
import  Quiz  from './pages/Quiz';
import dishes from './components/food.json'
import drinks from './components/drinks.json'
import DisplayFood from './components/DisplayFood';


function App() {
  return (
    <div>
        <NavBar/>

        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/food"  element={<Food dishes={dishes}/>} />
          <Route exact path="/drinks"  element={<Drinks drinks={drinks}/>} />
          <Route exact path="/pairings" element={<Pairings/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path='/admin/add' element={<AddFoodItemForm />} />
          <Route exact path='/admin/food'  element={<AdminFoodPage dishes={dishes}/>} />
          <Route exact path='/admin/drinks'  element={<AdminDrinkPage  drinks={drinks}/>} />
          <Route exact path='/quiz'  element={<Quiz dishes={dishes}/>} />
          <Route path='/food/:name' element={<DisplayFood dishes={dishes} />} />
        </Routes>

        
    </div>
  );
}

export default App;
