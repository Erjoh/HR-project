import React, {ChangeEvent} from 'react';
import {addHired} from "../../../store/reducers/createVacancy/vacancySlice";
import {useDispatch} from "react-redux";

const InputNeededPosHired = () => {
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addHired(e.target.checked))
    }
    return (
        <div className={'flex gap-2 items-center'}>
            <input
                className={'w-6 h-6 border-0 border-gray rounded'}
                onChange={handleChange}
                type="checkbox"/>
            <p>Нужная позиция отсутствует в списке</p>
        </div>
    );
};

export default InputNeededPosHired;