import React, { useContext } from 'react';

import { VscChromeClose } from "react-icons/vsc";
import { AppContext } from "../App";

const Cart = () => {
    const { CartOpen, setCartOpen, quantity, setQuantity } = useContext(AppContext);
    let cart = []
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }

    const numberOfItems = cart.length
    let totalCost = 0
    if (cart.length) {
        let costsArr = [...cart].map((item) => item = parseFloat(item.cost))
        totalCost = costsArr.reduce(function (a, b) {
            return a + b
        })
    }

    const  deleteItem = (item) => {
        
        for( var i = 0; i < cart.length; i++){ 
                                   
            if ( cart[i] === item) { 
                cart.splice(i, 1); 
                i--; 
            }
        }

        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(cart));
         setQuantity(cart.length)
    
    }

    const clearCart = () => {
        setQuantity(0)
        localStorage.removeItem('cart')
    }

    /*const decreaseQuantity = (cartItem) => {
        console.log(' decreaseQuantity ')
       
        console.log(cartItem.quantity)
        cartItem.quantity--
        console.log(cart)

    }

    const increaseQuantity = (cartItem) => {
        console.log(' encreaseQuantity ')
        cartItem.quantity = cartItem.quantity + 1
        console.log(cartItem.quantity)

        console.log (cart, 'cart')
    }*/


    if (CartOpen === 'true')
        return (

            <div className='h-screen w-full bg-red-200 absolute top-0 right-0 z-50 popup '>
                <div className='w-1/3 bg-white h-full opacity-100 absolute right-0 top-0 p-8 flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-3xl mb-28'>Cart</h1>
                            <button
                                onClick={() => setCartOpen('false')}
                                className='w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center'>
                                <VscChromeClose></VscChromeClose>
                            </button>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p>{numberOfItems} items</p>
                            <p 
                            onClick={() => clearCart()}
                            className='text-slate-300 uppercase text-sm cursor-pointer'>Clear</p>
                        </div>

                        <div className='overflow-y-scroll h-96'>
                            {(cart && cart.length) ?
                                (cart.map((cartItem, index) => {
                                    return (
                                        <div
                                            className='item-box border-t p-6 flex justify-between items-center '
                                            key={index}>

                                            <div className='flex w-1/2'>
                                                <img
                                                    alt="items"
                                                    className='pr-8 w-24'
                                                    src={cartItem.imgUrl}>
                                                </img>
                                                <div className="flex flex-col justify-between">
                                                    <h2>{cartItem.title}</h2>
                                                    <p className='font-bold text-lg'>{cartItem.cost}</p>
                                                </div>
                                            </div>
                                            <div className='flex items-baseline'>
                                                <button 
                                                onClick={() => {
                                                    decreaseQuantity(cartItem)
                                                }}
                                                className='w-11 p-1 bg-slate-200 text-lg rounded-md'>-</button>
                                                <p className='mx-5'>{cartItem.quantity}</p>
                                                <button 
                                                 onClick={() => {
                                                    increaseQuantity(cartItem)
                                                }}
                                                className='w-11  p-1 bg-slate-200 text-lg rounded-md'>+</button>
                                            </div>
                                            <VscChromeClose 
                                            onClick={() => deleteItem(cartItem)} 
                                            className='text-slate-200 cursor-pointer'></VscChromeClose>
                                        </div>
                                    )
                                }
                                ))

                                : (
                                    <div> No Items In Cart </div>
                                )}
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <p>Total cost:</p>
                            <div className='text-bold text-3xl'>{totalCost} EUR</div>
                        </div>
                        <button className='px-14 py-2 bg-teal-600 rounded-md uppercase text-xs'>Make the order</button>
                    </div>
                </div>

            </div>
        )
}

export default Cart;
