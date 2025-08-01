// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter as Router, Routes,Route, useNavigate} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'


export default function App() {
    return (
     <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />


     </Routes>



    )
}