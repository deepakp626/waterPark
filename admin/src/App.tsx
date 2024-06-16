import  React from 'react';
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList.tsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <UserList />
      <Router>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Router>

    </>
  )
}

export default App
