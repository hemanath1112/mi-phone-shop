import React from 'react'
import Header from './Componnet/Header/Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Componnet/Home/Home'
import Phones from './Componnet/PhoneItems/Phone'
import Tv from './Componnet/TvItems/TvItem'
import Signup from './Componnet/Singup/Signup'
// import Card from './Componnet/Cart/Cart'
import AddPhoneItem from './Componnet/AddItems/AddPhone'
import AddTvItem from './Componnet/AddItems/AddTv'
import Cart from './Componnet/Cart/Cart'

const App = () => {
  return (
    <div>

   
        <Routes>
          <Route path='/' element={
            <>
              <Header/>
              <Home/>
            </>
          }/>
          <Route path='/phone' element={ 
          <>
            <Header/>
            <Phones/>
          </> 
          }/>
          <Route path='/phone/:id' element={ 
          <>
            <Header/>
            <AddPhoneItem/>
          </> 
          }/>
          <Route path='/tv' element={ <Tv/> }/>
          <Route path='/tv/:id' element={ <AddTvItem/> }/>
          <Route path='/sign' element={ <Signup/> }/>
          <Route path='/cart' element={<Cart/>}/> 
        </Routes>

    </div>
  )
}

export default App