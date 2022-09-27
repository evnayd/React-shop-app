import React from 'react';

const Sort = ({sortItems}) => {

    return (
    <div className='text-gray-500 text-sm'>
        <p className="cursor-pointer"
        onClick={() => sortItems('1')}>
        To most Expensive</p>
        <p className="cursor-pointer"
        onClick={() => sortItems('2')}>
        To less Expensive</p>
    </div>
    )
}

export default Sort;