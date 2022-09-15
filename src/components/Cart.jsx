import React from 'react';

import {VscChromeClose} from "react-icons/vsc";

//VscError
// <button className='w-10 h-10 rounded-full border  border-slate-200'>+</button>

const Cart = ( ) => {

    return  (
    <div className='h-screen w-full bg-red-200 absolute top-0 right-0 z-50 popup'>
        <div className='w-1/3 bg-white h-full opacity-100 absolute right-0 top-0 p-8 flex flex-col justify-between'>
            <div>
            <div className='flex justify-between'>
              <h1 className='font-bold text-3xl mb-28'>Cart</h1>    
              <button className='w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center'>
              <VscChromeClose></VscChromeClose>
                </button>
              </div>
              <div className='flex justify-between pb-2'>
              <p>4 items</p>
              <p className='text-slate-300 uppercase text-sm'>Clear</p>
              </div>
              <div className='item-box border-t p-6 flex justify-between items-center'>
                    <div className='flex w-1/2'>
                    <img 
                    alt="items" 
                    className='pr-8 w-24'
                     src="https://swiperjs.com/demos/images/nature-2.jpg">   
                     </img>
                    <div className="flex flex-col justify-between">
                    <h2>Color Title</h2>
                    <p className='font-bold text-lg'>3500</p>
                    </div>
                    </div>
                    <div className=' flex items-baseline'>
                    <button className='w-11 p-1 bg-slate-200 text-lg rounded-md'>-</button>
                    <p className='mx-5'>1</p>
                    <button className='w-11  p-1 bg-slate-200 text-lg rounded-md'>+</button>
                    </div>
                    <VscChromeClose className='text-slate-200'></VscChromeClose>
                    </div>

                   <div className='item-box border-t p-6 flex justify-between items-center'>
                    <div className='flex w-1/2'>
                    <img 
                    alt="items" 
                    className='pr-8 w-24'
                     src="https://swiperjs.com/demos/images/nature-2.jpg">   
                     </img>
                    <div className="flex flex-col justify-between">
                    <h2>Color Title</h2>
                    <p className='font-bold text-lg'>3500</p>
                    </div>
                    </div>
                    <div className='flex items-baseline'>
                    <button className='w-11 p-1 bg-slate-200 text-lg rounded-md'>-</button>
                    <p className='mx-5'>1</p>
                    <button className='w-11  p-1 bg-slate-200 text-lg rounded-md'>+</button>
                    </div>
                    <VscChromeClose className='text-slate-200'></VscChromeClose>
                   </div>
                   </div>
                   <div className='flex justify-between'>
                        <div>
                            <p>Cost:</p>
                            <div className='text-bold text-3xl'>14 000</div>
                        </div>
                    <button className='px-14 py-2 bg-teal-600 rounded-md uppercase text-xs'>Make the order</button>
                    </div>
           </div>

          
    </div>
    )
}

export default Cart;