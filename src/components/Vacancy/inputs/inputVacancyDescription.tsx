import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addDescription} from "../../../store/reducers/createVacancy/vacancySlice";

const InputVacancyDescription = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addDescription(e.target.value))
    }

    return (
        <div>
            <h3 className={'font-inter text-1xl font-bold'}>
                Описание к вакансии
                <span
                    className={'text-red-600'}>*
                </span>
            </h3>
            <input
                className={'w-full border border-gray p-4 rounded'}
                onChange={handleChange}
                type="text"/>
        </div>
    );
};

export default InputVacancyDescription;