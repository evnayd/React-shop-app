//import './App.css';
import React from 'react';
import { Cart, Filter, Nav, Shop, Slider, Sort } from './components';

function App() {
  return (
    <div className="App">
      <Cart/>
      <Filter/>
      <Nav/>
      <Shop/>
      <Slider/>
      <Sort/>
  </div>
  );
}

export default App;
