import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {addIndustry} from "../../../store/reducers/createVacancy/vacancySlice";

const SelectIndustry = () => {
    const dispatch = useDispatch()
    const industry = useSelector((state: RootState) => state.vacancy.industry)
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(addIndustry(e.target.value))
    }
    return (
        <div>
            <h3 className={'font-inter text-1xl font-bold'}>Отрасль
                <span
                    className={'text-red-600'}>*
                    </span>
            </h3>
            <select onChange={handleChange} className={'w-full p-4 bg-white border border-gray rounded'} name="position"
                    value={industry} id="position">
                <option value="" disabled selected hidden>-Выберите-</option>
                <option value=""></option>
            </select>
        </div>
    );
};

export default SelectIndustry;