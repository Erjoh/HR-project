import React, {ChangeEvent} from 'react';
import {addInfo} from "../../../store/reducers/createVacancy/vacancySlice";
import {useDispatch} from "react-redux";

const InputAboutCompany = () => {
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addInfo(e.target.value))
    }
    return (
        <div>
            <h3 className={'font-inter text-1xl font-bold'}>О компании
                <span
                    className={'text-red-600'}>*
                    </span>
            </h3>
            <input onChange={handleChange} className={'w-full border border-gray p-4 rounded overflow-auto'}
                   type="text"/>
        </div>
    )
        ;
};

export default InputAboutCompany;