import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addValueOfSalary} from "../../../store/reducers/createVacancy/vacancySlice";

const InputSalaryValue = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addValueOfSalary(e.target.value))
    }

    return (
        <input
            className={'w-full border border-gray p-4 rounded'}
            onChange={handleChange}
            type="text"/>
    );
};

export default InputSalaryValue;