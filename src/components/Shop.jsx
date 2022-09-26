import React, {useState, useContext} from 'react';
import Filter from './Filter';
import Sort from './Sort';
import { AppContext } from "../App";

const Shop = () => {
  const [items] = useState ( [{
    title: "Краска Wallquest, Brownsone MS90102",
    cost: 30,
    imgUrl: "https://swiperjs.com/demos/images/nature-1.jpg",
    new: true,
    exclusive: true,
    in_stock: true,
    sale: false,
    quantity: 1

  },
  {
    title: "Краска Wallquest, Brownsone MS90103",
    cost: 40,
    imgUrl: "https://swiperjs.com/demos/images/nature-2.jpg",
    new: false,
    exclusive: true,
    in_stock: true,
    sale: true,
    quantity: 1
  },
  {
    title: "Краска Wallquest, Brownsone MS90104",
    cost: 32,
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    new: true,
    exclusive: false,
    in_stock: true,
    sale: false,
    quantity: 1
  },
  {
    title: "Краска Wallquest, Brownsone MS90105",
    cost: 29,
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    new: true,
    exclusive: false,
    in_stock: true,
    sale: false,
    quantity: 1
  },
  {
    title: "Краска Wallquest, Brownsone MS90106",
    cost: 20,
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    new: false,
    exclusive: false,
    in_stock: true,
    sale: true,
    quantity: 1

  },
  {
    title: "Краска Wallquest, Brownsone MS90107",
    cost: 19,
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    new: false,
    exclusive: false,
    in_stock: true,
    sale: true,
    quantity: 1
  },
  {
    title: "Краска Wallquest, Brownsone MS90108",
    cost: 80,
    imgUrl: "https://swiperjs.com/demos/images/nature-1.jpg",
    new: true,
    exclusive: true,
    in_stock: true,
    sale: false,
    quantity: 1
  },
 
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
    <div className='lg:flex lg:justify-between app-container py-20 relative'>
      <Filter filterItems={filterItems} />
      <div className='lg:w-4/5'>
        <div className='md:flex md:justify-between'>
        <h1 className='hidden md:block'>{filteredItems.length} items</h1>
        <Sort 
        className=""
        sortItems={sortItems}/>
        </div>
        <div className="md:flex flex-wrap justify-between mx-1">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={index}
                className='border-b pb-4 lg:mr-4 mb-4'>
                <img src={item.imgUrl}
                  alt="item_picture"
                  className="w-auto h-60 md:m-8 mb-6"></img>
                <h2 className='mb-4 w-4/5'>{item.title}</h2>
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