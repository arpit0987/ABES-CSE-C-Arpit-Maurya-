import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'
import Navbar from './Component/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Assignment from './Component/Assignment'
function App() {
  return (
    <div>
      <Navbar home="Abes" />
      <br />
      <Card name="Arpit" edu="Btech" />
      <br />
      <Card name="Ayush" edu="Mtech" />
      <br />
      <Card name="Vivek" edu="Phd"/>
      <Assignment/>
    </div>
  )
}

export default App
