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


function App() {
  return (
    <div>
      <header>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/food" element={<Food/>} />
          <Route exact path="/drinks" element={<Drinks/>} />
          <Route exact path="/pairings" element={<Pairings/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path='/admin/add' element={<AddFoodItemForm />} />
          <Route exact path='/admin/food' element={<AdminFoodPage />} />
          <Route exact path='/admin/drinks' element={<AdminDrinkPage />} />
          <Route exact path='/quiz' element={<Quiz />} />
        </Routes>

        
      </header>
    </div>
  );
}

export default App;
