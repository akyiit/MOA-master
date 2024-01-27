import { useState } from 'react'
import React from 'react'
import Form from './components/Form'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Window from './components/Window'


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar/>
      <Card/>
      <Window/>
      <Form/>
      
      
    </>
    
  );
}

export default App
