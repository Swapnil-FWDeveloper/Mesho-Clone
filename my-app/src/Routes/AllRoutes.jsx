import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Address from '../Pages/Address'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Payment from '../Pages/Payment'
import Search from '../Pages/Search'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/Address" element={<Address/>}/>
    <Route path="Cart" element={<Cart/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Payment' element={<Payment/>}/>
    <Route path='Search' element={<Search/>}/>
    
    </Routes>
  )
}

export default AllRoutes