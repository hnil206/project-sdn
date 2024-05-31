import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Task from './Task'
import ListProduct from './ListProduct'
import UpdateProduct from './UpdateProduct';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/task/create' element={<Task/>}></Route>
        <Route path='/task' element={<ListProduct/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/task/update/:id' element={<UpdateProduct/>}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App;
