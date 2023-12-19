import React from 'react';

const ExpBlock = ({title, value}) => {
    return (
        <div>
            <span className={'text-gray-300 font-inter text-xs font-medium uppercase'}>{title}</span>
            <h3 className={'pr-20'}>{value}</h3>
        </div>
    );
};

export default ExpBlock;