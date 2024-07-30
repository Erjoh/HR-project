import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addLastPrice} from "../../../store/reducers/createVacancy/vacancySlice";

const InputLastPrice = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addLastPrice(e.target.value))
    }

    return (
        <input
            className={'w-full border border-gray p-4 rounded'}
            onChange={handleChange}
            type="text"/>
    );
};

export default InputLastPrice;