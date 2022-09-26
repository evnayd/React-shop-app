import React, {useState} from 'react';
import { Cart, Header, Shop, Slider } from './components';


export const AppContext = React.createContext();

function App() {
  const [quantity, setQuantity] = useState(() => {
    const saved = localStorage.getItem("cart");
    let itemsInCart = saved
    if(saved){
      itemsInCart = JSON.parse(saved)
    }

    return itemsInCart ? itemsInCart.length : 0
  });



  const [ CartOpen, setCartOpen] = useState('false')
  const [  number, setNumber] = useState('false')

  return (

    <AppContext.Provider value={{ CartOpen, setCartOpen, quantity, setQuantity, number, setNumber }}  
    className="App relative">
      <Header/>
      <Slider/> 
      <Shop/>
      <Cart/>
  </AppContext.Provider>
  );
}

export default App;
