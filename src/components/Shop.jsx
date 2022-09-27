import React, { useState, useContext } from 'react';
import Filter from './Filter';
import Sort from './Sort';
import { AppContext } from "../App";

const Shop = () => {
  const [items] = useState ( [{
    title: "Wall Paint Wallquest, MS90102",
    cost: 31,
    imgUrl: require("../img/Photo.jpg"),
    new: true,
    exclusive: true,
    in_stock: true,
    sale: false,
    quantity: 1

  },
  {
    title: "Wall Paint Wallquest, MS90103",
    cost: 40,
    imgUrl: require("../img/Photo1.jpg"),
    new: false,
    exclusive: true,
    in_stock: true,
    sale: true,
    quantity: 1
  },
  {
    title: "Wall Paint Wallquest, MS90111",
    cost: 45,
    imgUrl: require("../img/Photo1.jpg"),
    new: false,
    exclusive: true,
    in_stock: true,
    sale: true,
    quantity: 1
  },
  {
    title: "Wall Paint Wallquest, MS90104",
    cost: 32,
    imgUrl: require("../img/Photo3.jpg"),
    new: true,
    exclusive: false,
    in_stock: true,
    sale: false,
    quantity: 1
  },
  {
    title: "Wall Paint Wallquest, MS90105",
    cost: 29,
    imgUrl: require("../img/Photo.jpg"),
    new: true,
    exclusive: false,
    in_stock: true,
    sale: false,
    quantity: 1
  },
  {
    title: "Wall Paint Wallquest, MS90106",
    cost: 20,
    imgUrl: require("../img/Photo.jpg"),
    new: false,
    exclusive: false,
    in_stock: true,
    sale: true,
    quantity: 1

  },
  {
    title: "Wall Paint Wallquest, MS90107",
    cost: 19,
    imgUrl: require("../img/Photo1.jpg"),
    new: false,
    exclusive: false,
    in_stock: true,
    sale: true,
    quantity: 1
  },
  {
    title: "Wall Paint Wallquest, MS90108",
    cost: 80,
    imgUrl: require("../img/Photo3.jpg"),
    new: true,
    exclusive: true,
    in_stock: true,
    sale: false,
    quantity: 1
  },
  {
    title: "Wall Paint Wallquest, MS90138",
    cost: 67,
    imgUrl: require("../img/Photo1.jpg"),
    new: true,
    exclusive: true,
    in_stock: true,
    sale: false,
    quantity: 1
  },
  {
    title: "Wall Paint Wallquest, MS98138",
    cost: 23,
    imgUrl: require("../img/Photo.jpg"),
    new: true,
    exclusive: false,
    in_stock: true,
    sale: true,
    quantity: 1
  }
 
  ])
  const { setQuantity } = useContext(AppContext);
  const [filteredItems, setFilteredItems] = useState(items);
  const filterItems = (data) => {
    if (data) {
      let filteredItems = [...items].filter((item) => {
        if(item[data])
          return item
        return ''
      })
      setFilteredItems(filteredItems);
    }
  }

  const sortItems = (data) => {
    if (data === '1') {   
    let sortedItems = [...filteredItems].sort((a, b) =>  a.cost - b.cost )
    setFilteredItems(sortedItems);
    }
    if (data === '2') {
      let sortedItems = [...filteredItems].sort((a, b) =>  b.cost - a.cost )
      setFilteredItems(sortedItems);
    }    
  };



const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  let duplicate = cart.find(element => element.title === item.title);
    
    if (duplicate !== undefined) {                               
        duplicate.quantity++
    }

    else {
  cart.push(item)
    }

  localStorage.setItem('cart', JSON.stringify(cart))
  setQuantity(cart.length)
  
}


  return (
    <div className='lg:flex lg:justify-between app-container my-20 relative'>
      <Filter filterItems={filterItems} />
      <div className='lg:w-4/5'>
        <div className='md:flex md:justify-between'>
        <h2 className='hidden md:block text-gray-500 text-sm'>{filteredItems.length} items</h2>
        <Sort 
        sortItems={sortItems}/>
        </div>
        <div className="md:flex flex-wrap justify-between mx-1 pt-16">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={index}
                className='border-b px-2 py-6 lg:mr-4 mb-4'>
                <img src={item.imgUrl}
                  alt="item_picture"
                  className="w-auto h-60 ml-auto mr-auto"></img>
                <h2 className='mt-4 mb-4 w-4/5'>{item.title}</h2>
                <div className="flex justify-between">
                  <p className='font-bold'>{item.cost} EUR </p>
                  <button 
                  onClick={()=> addToCart(item)}
                  className="cursor-pointer rounded-lg  text-lg bg-slate-200 hover:bg-teal-700 md:bg-teal-600 w-12 md:w-20">+</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Shop;