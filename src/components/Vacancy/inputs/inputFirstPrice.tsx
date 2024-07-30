import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addFirstPrice} from "../../../store/reducers/createVacancy/vacancySlice";

const InputFirstPrice = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addFirstPrice(e.target.value))
    }

    return (
        <input
            className={'w-full border border-gray p-4 rounded'}
            onChange={handleChange}
            type="text"/>
    );
};

export default InputFirstPrice;