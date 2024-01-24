import React from 'react';
import ArtIcon from "./Icons/artIcon";

const CategoryCard = ({title, quantity}) => {
    return (
        <div className='flex justify-center'>
            <div className='p-10 px-16 flex-shrink-0 rounded-2xl border border-gray-300 bg-opacity-80 bg-gray-249 overflow-hidden'>
                <div className='flex justify-between items-start flex-col relative'>
                    <h3 className="text-black font-inter text-base font-normal">{title}</h3>
                    <p className="text-gray-600 font-inter text-base font-normal">{quantity}</p>
                    <div className="absolute rounded-full p-4 flex-shrink-0 bg-purple-700 right-48 bottom-0 transform -translate-y-1/2">
                        <ArtIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;