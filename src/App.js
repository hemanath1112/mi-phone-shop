import React from 'react'
import Header from './Componnet/Header/Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Componnet/Home/Home'
import Phones from './Componnet/PhoneItems/Phone'
import Tv from './Componnet/TvItems/TvItem'
import Signup from './Componnet/Singup/Signup'
import AddPhoneItem from './Componnet/AddItems/AddPhone'
import AddTvItem from './Componnet/AddItems/AddTv'
import Cart from './Componnet/Cart/Cart'
import Footer from './Componnet/Footer/Footer'

const App = () => {
  return (
    <div>

   
        <Routes>
          <Route path='/' element={
            <>
              <Header/>
              <Home/>
              <Footer/>
            </>
          }/>
          <Route path='/phone' element={ 
          <>
            <Header/>
            <Phones/>
            <Footer/>
          </> 
          }/>
          <Route path='/phone/:id' element={ 
          <>
            <Header/>
            <AddPhoneItem/>
            <Footer/>
          </> 
          }/>
          <Route path='/tv' element={ 
             <>
             <Header/>
             <Tv/>
             <Footer/>
           </>
           }/>
          <Route path='/tv/:id' element={ 
             <>
             <Header/>
             <AddTvItem/> 
             <Footer/>
           </>
          }/>
          <Route path='/sign' element={ <Signup/> }/>
          <Route path='/cart' element={
          <>
            <Header/>
            <Cart/>
            <Footer/>

          </>
         }/> 
        </Routes>

    </div>
  )
}

export default App