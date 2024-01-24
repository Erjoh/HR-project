import React, {ChangeEvent} from 'react';

const InputCode = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    };
    return (
        <input className={'flex text-center text-5xl text-gray-300 rounded-3xl bg-white shadow-md items-center w-24 h-24'}
               onChange={handleChange} type="text" maxLength={1}
        />
    );
};

export default InputCode;