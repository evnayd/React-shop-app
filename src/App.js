import React, {useState} from 'react';
import { Cart, Header, Shop, Slider } from './components';


export const AppContext = React.createContext();

function App() {
  const [quantity, setQuantity] = useState(() => {
    const saved = localStorage.getItem("cart");
    const itemsInCart = JSON.parse(saved);
    console.log(itemsInCart, 'items in cart')
    return itemsInCart.length
  });

  const [ CartOpen, setCartOpen] = useState('false')

  return (

    <AppContext.Provider value={{ CartOpen, setCartOpen, quantity, setQuantity }}  
    className="App relative">
      <Header/>
      <Slider/> 
      <Shop/>
      <Cart/>
  </AppContext.Provider>
  );
}

export default App;
