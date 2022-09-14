import React, {useState} from 'react';
import Filter from './Filter';

const Shop = () => {
  const [items] = useState ( [{
    title: "Краска Wallquest, Brownsone MS90102",
    cost: "30",
    imgUrl: "https://swiperjs.com/demos/images/nature-1.jpg",
    new: true,
    exclusive: true,
    in_stock: true,
    sale: false
  },
  {
    title: "Краска Wallquest, Brownsone MS90102",
    cost: "40",
    imgUrl: "https://swiperjs.com/demos/images/nature-2.jpg",
    new: false,
    exclusive: true,
    in_stock: true,
    sale: true
  },
  {
    title: "Краска Wallquest, Brownsone MS90102",
    cost: "32",
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    new: true,
    exclusive: false,
    in_stock: true,
    sale: false
  },
  {
    title: "Краска Wallquest, Brownsone MS90102",
    cost: "29",
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    new: true,
    exclusive: false,
    in_stock: true,
    sale: false
  },
  {
    title: "Краска Wallquest, Brownsone MS90102",
    cost: "20",
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    new: false,
    exclusive: false,
    in_stock: true,
    sale: true
  },
  {
    title: "Краска Wallquest, Brownsone MS90102",
    cost: "19",
    imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    new: false,
    exclusive: false,
    in_stock: true,
    sale: true
  },
  ])

  const [filteredItems, setFilteredItems] = useState(items);

  const handleClick = (data) => {
    console.log('items before filter', filteredItems)
    let abc = [...items]
    console.log('items copy before filter', abc)

    
    console.log('filter name in shop comp:', data);
    if (data) {
      let filteredItems = abc.filter((a) => {
        if(a[data])
          return a
        return ''
      })
      console.log('filteredItems after filter', filteredItems )
      setFilteredItems(filteredItems);
    }
  };

  return (
    <div className='flex justify-between app-container py-20'>
      <Filter handleClick={handleClick} />
      <div>
        <h1>{filteredItems.length} items</h1>
        <div className=" md:flex justify-between flex-wrap">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={index}
                className='border-b pb-4 mr-2 mb-4'>
                <img src={item.imgUrl}
                  alt="item_picture"
                  className="w-60 h-60 m-8"></img>
                <h2 className='mb-4 w-4/5'>{item.title}</h2>
                <div className="flex justify-between">
                  <p className='font-bold'>{item.cost} EUR </p>
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