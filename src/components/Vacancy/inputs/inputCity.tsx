import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addCity} from "../../../store/reducers/createVacancy/vacancySlice";

const InputCity = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(addCity(e.target.value))
    }

    return (
        <select
            onChange={handleChange}
            className={'p-4 bg-white border border-gray rounded'} name="position" id="position">
            <option value="" disabled selected hidden>-Выберите-</option>
            <option value=""></option>
        </select>
)
    ;
};

export default InputCity;