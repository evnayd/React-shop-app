import React, {useState} from 'react';
import Filter from './Filter';
import Sort from './Sort';

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
  {
    title: "Краска Wallquest, Brownsone MS90109",
    cost: "80",
    imgUrl: "https://swiperjs.com/demos/images/nature-1.jpg",
    new: true,
    exclusive: true,
    in_stock: true,
    sale: false
  },
  ])

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
  };

  /*const sortItems = (data) => {
    if (data === '1') {   
    let sortedItems = [...items].sort((a, b) =>  a.cost - b.cost )
    console.log(sortedItems , 'data after sort')
    setFilteredItems(sortedItems);
    }
    if (data === '2') {
      let sortedItems = [...items].sort((a, b) =>  b.cost - a.cost )
      console.log(sortedItems , 'data after sort')
      setFilteredItems(sortedItems);
    }    
  };*/

  const sortItems = (data) => {
    if (data === '1') {   
    let sortedItems = [...filteredItems].sort((a, b) =>  a.cost - b.cost )
    console.log(sortedItems , 'data after sort')
    setFilteredItems(sortedItems);
    }
    if (data === '2') {
      let sortedItems = [...filteredItems].sort((a, b) =>  b.cost - a.cost )
      console.log(sortedItems , 'data after sort')
      setFilteredItems(sortedItems);
    }    
  };

  return (
    <div className='flex justify-between app-container py-20'>
      <Filter filterItems={filterItems} />
      <div className='md:w-4/5'>
        <h1>{filteredItems.length} items</h1>
        <Sort sortItems={sortItems}/>
        <div className=" md:flex justify-left flex-wrap ">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={index}
                className='border-b pb-4 mr-4 mb-4'>
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