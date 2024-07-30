import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addAdditionalInformation} from "../../../store/reducers/createVacancy/vacancySlice";

const InputAdditionalInformation = () => {
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addAdditionalInformation(e.target.value))
    }
    return (
        <div>
            <h3 className={'font-inter text-1xl font-bold'}>Дополнительная информация</h3>
            <input onChange={handleChange} className={'w-full border border-gray p-4 rounded overflow-auto'}
                   type="text"/>
        </div>
    );
};

export default InputAdditionalInformation;