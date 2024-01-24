import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addRequiredSkills} from "../../../store/reducers/createVacancy/vacancySlice";

const InputRequiredSkills = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addRequiredSkills(e.target.value))
    }

    return (
        <input
            className={'w-full border border-gray p-4 rounded'}
            onChange={handleChange}
            type="text"/>
    );
};

export default InputRequiredSkills;