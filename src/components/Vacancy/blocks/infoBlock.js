import React from "react";

const InfoBlock = ({title, value, icon, worktime}) => {
    return (
        <div>
            <span className={'text-gray-300 font-inter text-xs font-medium uppercase'}>{title}</span>
            <h3>{value}</h3>
            <p className='flex items-center gap-2 text-gray-300 font-inter text-lg font-normal py-8'>
                <span>{icon}</span>
                {worktime}
            </p>
        </div>
    );
};

export default InfoBlock;