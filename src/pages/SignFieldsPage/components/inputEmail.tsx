import React, {ChangeEventHandler} from 'react';


const InputEmail = ({onChange, placeholder}: {
    onChange: ChangeEventHandler<HTMLInputElement>,
    placeholder: string
}) => {

    return (
        <input
            onChange={onChange}
            type={'email'}
            placeholder={placeholder}
            className="pl-10 pr-72 px-40 rounded-md bg-white shadow-md h-16 flex-shrink-0 flex items-center"/>

    );
};

export default InputEmail;