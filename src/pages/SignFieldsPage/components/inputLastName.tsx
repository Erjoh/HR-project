import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addLastName} from "../../../store/reducers/signUp/signUpSlice";

const InputLastName = ({placeholder}: { placeholder: string }) => {
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addLastName(e.target.value))
    }
    return (
        <input
            onChange={handleChange}
            type={'text'}
            placeholder={placeholder}
            className="pl-10 pr-72 px-40 rounded-md bg-white shadow-md h-16 flex-shrink-0 flex items-center"/>

    );
};

export default InputLastName;