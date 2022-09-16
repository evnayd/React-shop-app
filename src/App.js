import React, {useState} from 'react';
import { Cart, Header, Shop, Slider } from './components';


export const AppContext = React.createContext();

function App() {

  const [ CartOpen, setCartOpen] = useState('false')

  return (

    <AppContext.Provider value={{ CartOpen, setCartOpen }}  
    className="App relative">
      <Header/>
      <Slider/> 
      <Shop/>
      <Cart/>
  </AppContext.Provider>
  );
}

export default App;
