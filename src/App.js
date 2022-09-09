//import './App.css';
import React from 'react';
import { Cart, Filter, Header, Shop, Slider, Sort } from './components';

function App() {
  return (
    <div className="App app-container">
      <Header/>
      <Cart/>
      <Filter/>    
      <Shop/>
      <Slider/>
      <Sort/>
  </div>
  );
}

export default App;
