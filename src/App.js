import React from 'react';
import './App.css';
import MenuWeb from './components/MenuWeb';
import ControlledCarousel from './components/home/ControlledCarousel';
import CardsBanner from './components/home/CardsBanner';
function App() {
  return (
    <div>
      <MenuWeb/>
      <ControlledCarousel/>
      <CardsBanner/>
    </div>
  );
}

export default App;
