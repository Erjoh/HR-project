import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {addTypeOfEmployment} from "../../../store/reducers/createVacancy/vacancySlice";

const SelectTypeOfEmployment = () => {
    const dispatch = useDispatch()
    const typeOfEmployment = useSelector((state: RootState) => state.vacancy.typeOfEmployment)

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(addTypeOfEmployment(e.target.value))
    }
    return (
        <select onChange={handleChange} className={'w-full p-4 bg-white border border-gray rounded'} name="position"
                value={typeOfEmployment} id="position">
            <option defaultValue='-Выберите-' disabled selected hidden>-Выберите-</option>
            {/*сделать имплементацию с бекенда*/}
            <option value=""></option>
        </select>
    );
    // return (
    //     <select className={'p-4 bg-white border border-gray w-2/5'} name="position" id="position">
    //         <option value="" disabled selected hidden>-Выберите-</option>
    //         <option value="">Бухгалтер</option>
    //     </select>
    // );
};

export default SelectTypeOfEmployment;