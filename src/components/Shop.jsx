import React from 'react';
import Filter from './Filter';

const Shop = ( ) => {
    const items = [{
      title: "First title",
      cost: "3000",
      imgUrl: "https://swiperjs.com/demos/images/nature-1.jpg"

    },
    {
    title: "Second title",
    cost:"4000",
    imgUrl: "https://swiperjs.com/demos/images/nature-2.jpg"
    },
    {
    title:"Third title",
    cost:"3200",
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg"
    },
    {
      title:"Краска Wallquest, Brownsone MS90102",
      cost:"3200",
      imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg"
      },
      {
        title:"Краска Wallquest, Brownsone MS90102",
        cost:"3200",
        imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg"
        },
        {
          title:"Краска Wallquest, Brownsone MS90102",
          cost:"3200",
          imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg"
          },
]
return (
  <div className='flex justify-between app-container py-20'>
     <Filter/>
    <div>
    <h1>{items.length} товаров</h1>
    <div  className=" md:flex justify-between flex-wrap">
      {items.map((item, index) => {
        return (
        <div
        key = {index}
        className='border-b pb-4 mr-2 mb-4'>
          <img src={item.imgUrl}
          alt="item_picture"
          className="w-60 h-60 m-8"></img>
        <h2 className='mb-4 w-4/5'>{item.title}</h2>
        <div className="flex justify-between">
        <p className='font-bold'>{item.cost} ₽</p>
        <button className="cursor-pointer hover:bg-teal-700 w-20 rounded-lg bg-teal-600 text-lg">+</button>
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