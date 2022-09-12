import React from 'react';

const Filter = ( ) => {
      
    const filterItems = [{
        value: "New",
      },
      {
        value: "Exclusive",
      },
      {
        value: "In stock",
      },
      {
        value: "Sale",
      },

    ]

    return  (
        <div className='w-1/5'>
             {filterItems.map((filterItem, index) => {
                return  (
        <div className="radio"  
        key = {index}>
          <label className='flex'>
            <input
              type="radio"
              value={filterItem.value}
              name="choice"
              className='mr-2 toggle'   
              checked={console.log(filterItem.value)}
            />
            <p className='mb-1 uppercase'>{filterItem.value}</p>
          </label>
        </div>
           )
        })}
        </div>         
    )
}




export default Filter;