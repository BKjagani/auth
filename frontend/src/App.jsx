import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AddProduct from './components/AddProduct'
import Shop from './components/Shop'

export default function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/addproduct' element={<AddProduct/>}/>
              <Route path='/shop' element={<Shop/>}/>
          </Routes>
      </Router>
    </>
  )
}
