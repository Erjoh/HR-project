import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addAddress} from "../../../store/reducers/createVacancy/vacancySlice";

const InputAddress = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addAddress(e.target.value))
    }

    return (
        <input
            className={'w-full border border-gray p-4 rounded'}
            onChange={handleChange}
            type="text"/>
    );
};

export default InputAddress;