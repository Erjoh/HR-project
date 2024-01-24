import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {addAdditionalInformation} from "../../../store/reducers/createVacancy/vacancySlice";

const InputAdditionalInformation = () => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addAdditionalInformation(e.target.value))
    }

    return (
        <input
            className={'w-full border border-gray p-4 rounded'}
            onChange={handleChange}
            type="text"/>
    );
    // return (
    //     <input
    //         className={'w-2/5 border border-gray p-4'}
    //         onChange={(e => (e.target.value))}
    //         type="text"/>
    // );
};

export default InputAdditionalInformation;