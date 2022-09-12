//import './App.css';
import React from 'react';
import { Cart, Header, Shop, Slider, Sort } from './components';


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>   
      <Shop/>
      <Cart/>
      <Sort/>
  </div>
  );
}

export default App;
