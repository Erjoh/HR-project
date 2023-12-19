import React from 'react';

const AboutBlock = ({title, value, icon, location}) => {
    return (
        <div>
            <span className={'text-gray-300 font-inter text-xs font-medium uppercase'}>{title}</span>
            <h3>{value}</h3>
            <p className='flex items-center gap-2 text-gray-300 font-inter text-lg font-normal py-10'>
                <span >{icon}</span>
                {location}
            </p>
        </div>
    );
};

export default AboutBlock;