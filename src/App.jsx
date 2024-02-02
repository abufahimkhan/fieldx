import { useState } from 'react'
import './App.css'
import RegistrationPage from './components/RegistrationPage'
import LoginPage from './components/LoginPage'
import LandingPage from './components/LandingPage'
import RegionList from './components/RegionList'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AreaList from './components/AreaList'

function App() {
  return (
     <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<LoginPage/>}></Route>
          <Route path='registration' element={<RegistrationPage/>}></Route>
          <Route path='region' element={<RegionList/>}></Route>
          <Route path='area' element={<AreaList/>}></Route>

        </Routes>
    </Router>
  
  )
}

export default App


