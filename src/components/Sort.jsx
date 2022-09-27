import React from 'react';

import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";


const Sort = ({sortItems}) => {

    return (
    <div className='text-gray-500 text-sm absolute right-5 top-0 md:static'>
        <div 
        onClick={() => sortItems('1')}
        className="flex items-center cursor-pointer">
        <VscChevronUp/>
        <p className=" ml-1">
        From lowest price</p>
        </div>
        <div 
         onClick={() => sortItems('2')}
        className="flex items-center cursor-pointer">
        <VscChevronDown/>
        <p className="ml-1">
        From highest price</p>
        </div>
    </div>
    )
}

export default Sort;