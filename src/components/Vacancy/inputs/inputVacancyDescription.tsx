import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addDescription} from "../../../store/reducers/createVacancy/vacancySlice";

const InputVacancyDescription = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addDescription(e.target.value))
    }

    return (
        <input
            className={'w-full border border-gray p-4 rounded'}
            onChange={handleChange}
            type="text"/>
    );
};

export default InputVacancyDescription;