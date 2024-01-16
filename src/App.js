import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import Navbar from './components/navbar';

export default function App() {
  
  
  return (
    <div className="App">
      <Navbar />
     <Weather />
      
    </div>
  );
}
