import React,  {useState} from 'react';
import { VscChevronDown } from "react-icons/vsc";
//import 'animate.css';

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
        <div className='md:w-1/5'>
           <h1 
           onClick={() => openFilter() } 
           className='uppercase md:hidden'>Filters</h1>
          <div className='filters-list w-full fixed md:static inset-0 h-full md:h-auto popup md:bg-white hidden md:block'>
            <div className='bg-white absolute md:static inset-x-0 bottom-0 h-2/3 px-10 py-14 md:p-0 rounded-t-3xl'>
            <VscChevronDown 
             onClick={() => closeFilter() } 
            className='block m-auto mb-6 md:hidden'></VscChevronDown>
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