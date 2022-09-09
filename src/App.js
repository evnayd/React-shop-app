//import './App.css';
import React from 'react';
import { Cart, Filter, Header, Shop, Slider, Sort } from './components';


function App() {
  return (
    <div className="App app-container">
      <Header/>
      <Slider/>  
      <Cart/>
      <Filter/>    
      <Shop/>
  
      <Sort/>
  </div>
  );
}

export default App;
