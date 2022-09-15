import React from 'react';

const Sort = ({sortItems}) => {
    /*const getSortGoal = ()  =>{

    }*/

    return (
    <div>
        <p className="cursor-pointer"
        onClick={() => sortItems('1')}>
        Most Expensive</p>
        <p className="cursor-pointer"
        onClick={() => sortItems('2')}>
        Less Expensive</p>
    </div>
    )
}

export default Sort;