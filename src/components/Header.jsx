import React, {useState, useContext} from 'react';
import Hamburger from 'hamburger-react';
import Nav from './Nav';
import { VscSearch } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { AppContext } from "../App";



const Header = ( ) => {
    const [isOpen, setOpen] = useState(false);
    const { setCartOpen, quantity} = useContext(AppContext);
    console.log('is open',  isOpen)

    return  (
    <div className="app-container flex py-3 md:pt-6  md:pb-6 justify-between items-end md:items-baseline border-b relative z-20">
        <Hamburger
        toggled={isOpen} toggle={setOpen}
        />
        <p className='header-title mb-1 uppercase font-semibold font-lg'>Colors</p>
        <Nav isOpen={isOpen}/>
        <div className = 'flex md:w-1/3 justify-between'>
        <div className = 'hidden md:flex flex-col mr-3'>
            <p>+16263737373</p>
            <p className='hidden lg:block text-xs text-gray-500'>Call</p>
        </div>
      <div className='md:flex'>
        <div className='hidden md:flex'>
      <VscSearch className='w-5 h-5 mr-2'  />
      <VscAccount  className='w-5 h-5  mr-2'/>
      <VscHeart  className='w-5 h-5  mr-2'/>
      </div>
      <div onClick={() => setCartOpen('true')}
       className='cursor-pointer mb-1 h-6 w-6 bg-teal-600 rounded-full flex items-center justify-center'>{quantity}</div>
        </div>    
        </div>
      </div>
    )
}
export default Header;