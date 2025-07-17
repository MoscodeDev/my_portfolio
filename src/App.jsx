import React from 'react'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Notfound from './pages/Notfound'
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <div className='bg-orange-50 min-h-screen overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
