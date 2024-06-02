import { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Task from './components/Task'
import ListProduct from './components/ListProduct'
import UpdateProduct from './components/UpdateProduct';
import Layout from './components/Layout';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index  element={<Home/>}></Route>
        <Route path='task/create' element={<Task/>}></Route>
        <Route path='task' element={<ListProduct/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='task/update/:id' element={<UpdateProduct/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
