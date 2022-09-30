import React,  {useState} from 'react';
import { VscChevronDown } from "react-icons/vsc";

const Filter =  ({filterItems}) => {
      
    const filterValues = [
        {
        title: 'New',
        name: 'new'
      },
      { 
        title: "Exclusive",
        name: 'exclusive'
      },
      {
        title: 'In stock',
        name: 'in_stock'
      },
      {
        title: "Sale",
        name: 'sale'
      },
    ]

   const [checkedFilter, setCheckedFilter] = useState('New');

   const getFilterValue = (data) => {
    setCheckedFilter(data)
    filterItems(data)
}


const closeFilter = () => {
  document.querySelector('.filters-list').style.display = "none";
}


const openFilter = () => {
  document.querySelector('.filters-list').style.display = "block";
  console.log('open filters')
}

    return  (
        <div className='lg:w-1/5'>
           <h1 
           onClick={() => openFilter() } 
           className='uppercase lg:hidden'>Filters</h1>
          <div className='z-50 filters-list w-full fixed lg:static inset-0 h-full lg:h-auto popup lg:bg-white hidden lg:block'>
            <div className='bg-white absolute lg:static inset-x-0 bottom-0 h-2/3 px-10 py-14 lg:p-0 rounded-t-3xl'>
            <VscChevronDown 
             onClick={() => closeFilter() } 
            className='block m-auto mb-6 lg:hidden'></VscChevronDown>
             {filterValues.map((filterValue, index) => {
                return  (
        <div className="radio"  
        key = {index}>
          <label className='flex'>
            <input
              type="radio"
              value={filterValue.title}
              name="choice"
              className='mr-2 toggle' 
              checked = {checkedFilter === filterValue.name}
              onChange={() => getFilterValue(filterValue.name)}
               />          
            <p className='md:mb-1 mb-3 uppercase'>{filterValue.title}</p>
          </label>
        </div>
           )
        })}
        </div>  
        </div>
        </div>       
    )
}


export default Filter;