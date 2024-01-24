import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {addTypeOfSalary} from "../../../store/reducers/createVacancy/vacancySlice";

const SelectTypeOfSalary = () => {
    const dispatch = useDispatch()
    const typeOfSalary = useSelector((state: RootState) => state.vacancy.typeOfSalary)

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(addTypeOfSalary(e.target.value))
    }
    return (
        <select onChange={handleChange} className={'w-full p-4 bg-white border border-gray rounded'} name="position"
                value={typeOfSalary} id="position">
            <option defaultValue='-Выберите-' disabled selected hidden>-Выберите-</option>
            {/*сделать имплементацию с бекенда*/}
            <option value=""></option>
        </select>
    );
};

export default SelectTypeOfSalary;