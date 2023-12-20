import React from 'react';

const InputEmail = ({type, placeholder, value, onChange}) => {
    return (
        <div>
            <input
                onChange={onChange}
                value={value}
                type={type}
                placeholder={placeholder}
                className="pl-10 pr-72 px-40 rounded-md bg-white shadow-md h-16 flex-shrink-0 flex items-center"/>
        </div>
    );
};

export default InputEmail;