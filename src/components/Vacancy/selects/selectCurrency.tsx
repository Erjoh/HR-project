import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {addCurrencyOfSalary} from "../../../store/reducers/createVacancy/vacancySlice";

const SelectCurrency = () => {
    const dispatch = useDispatch()
    const currencyOfSalary = useSelector((state: RootState) => state.vacancy.salaryResponse.valuta)

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(addCurrencyOfSalary(e.target.value))
    }
    return (
        <select onChange={handleChange} className={'w-full p-4 bg-white border border-gray rounded'} name="position"
                value={currencyOfSalary} id="position">
            <option defaultValue='-Выберите-' disabled selected hidden>-Выберите-</option>
            {/*сделать имплементацию с бекенда*/}
            <option value=""></option>
        </select>
    );
};

export default SelectCurrency;