//import './App.css';
import React from 'react';
import { Cart, Header, Shop, Slider, Sort } from './components';



function App() {

  return (
    <div className="App">
      <Header/>
      <Slider/> 
      {/*<Appcontext.Provider
       setFilter={setFilter}> */}
      <Shop/>
      <Cart/>
      <Sort/>
      {/*</Appcontext.Provider> */}
  </div>
  );
}

export default App;
