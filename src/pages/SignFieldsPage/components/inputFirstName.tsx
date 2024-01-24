import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addFirstName} from "../../../store/reducers/signUp/signUpSlice";


const InputFirstName = ({placeholder}: { placeholder: string }) => {
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addFirstName(e.target.value))
    }
    return (
        <input
            onChange={handleChange}
            type={'text'}
            placeholder={placeholder}
            className="pl-10 pr-72 px-40 rounded-md bg-white shadow-md h-16 flex-shrink-0 flex items-center"/>

    );
};

export default InputFirstName;