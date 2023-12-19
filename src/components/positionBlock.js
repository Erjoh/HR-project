import React from 'react';

const PositionBlock = ({title, value, icon, other}) => {
    return (
        <div>
            <span className={'text-gray-300 font-inter text-xs font-medium uppercase'}>{title}</span>
            <h3>{value}</h3>
            <p className='flex items-center gap-2 text-gray-300 font-inter text-lg font-normal py-10'>
                <span>{icon}</span>
                {other}
            </p>
        </div>
    );
};

export default PositionBlock;