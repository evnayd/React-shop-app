import React from 'react';

const Sort = ({sortItems}) => {
    /*const getSortGoal = ()  =>{

    }*/

    return (
    <div>
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