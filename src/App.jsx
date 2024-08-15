import { useState } from 'react'
import Navbar from './Layout/Commonent/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Commonent/Footer'


function App() {


  return (
    <>
  {/* <Navbar></Navbar> */}
      <div className=''>
      <Outlet></Outlet>
      </div>
  <Footer></Footer>
    </>
  )
}

export default App
