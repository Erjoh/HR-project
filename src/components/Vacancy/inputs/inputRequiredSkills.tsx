import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addRequiredSkills} from "../../../store/reducers/createVacancy/vacancySlice";

const InputRequiredSkills = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addRequiredSkills(e.target.value))
    }

    return (
        <div>
            <h3 className={'font-inter text-1xl font-bold'}>Требуемые навыки
                <span
                    className={'text-red-600'}>*
                    </span>
            </h3>
            <input
                className={'w-full border border-gray p-4 rounded'}
                onChange={handleChange}
                type="text"/>
        </div>
    )
        ;
};

export default InputRequiredSkills;