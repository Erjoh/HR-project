import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPosition} from "../../../store/reducers/createVacancy/vacancySlice";
import {ChangeEvent} from "react";
import {RootState} from "../../../store/store";

const SelectPosition = () => {
    const dispatch = useDispatch()
    const position = useSelector((state: RootState) => state.vacancy.position)

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(addPosition(e.target.value))
    }
    return (
        <div>
            <h3 className={'font-inter text-1xl font-bold'}>Позиция
                <span
                    className={'text-red-600'}>*
                        </span>
            </h3>
            <select onChange={handleChange} className={'w-full p-4 bg-white border border-gray rounded'} name="position"
                    value={position} id="position">
                <option defaultValue='-Выберите-' disabled selected hidden>-Выберите-</option>

                {/*сделать имплементацию с бекенда*/}
                <option value="-Выберите-">-Выберите-</option>
            </select>
        </div>
    );
};

export default SelectPosition;