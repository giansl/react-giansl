import React from 'react';
import './App.css';
import MenuWeb from './components/MenuWeb';
import CardsBanner from './components/home/CardsBanner';
import Banner from './components/home/Banner';
function App() {
  return (
    <div>
      <MenuWeb/>
      <Banner/>
      <CardsBanner/>
    </div>
  );
}

export default App;
