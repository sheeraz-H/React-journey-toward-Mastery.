import React from 'react'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/header/header'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout