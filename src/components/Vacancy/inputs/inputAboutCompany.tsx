import React, {ChangeEvent} from 'react';
import {addInfo} from "../../../store/reducers/createVacancy/vacancySlice";
import {useDispatch} from "react-redux";

const InputAboutCompany = () => {
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addInfo(e.target.value))
    }
    return (
        <input onChange={handleChange} className={'w-full border border-gray p-4 rounded overflow-auto'} type="text"/>
    );
};

export default InputAboutCompany;