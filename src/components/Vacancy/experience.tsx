import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {addSelectedExperience} from "../../store/reducers/createVacancy/vacancySlice";

const MOCKED_EXPERIENCE = [
    {
        value: 'null', label: 'Не имеет значения'
    },
    {
        value: 'none', label: 'Без опыта'
    },
    {
        value: 'none', label: 'От 1 года до 3 лет'
    },
    {
        value: 'none', label: 'От 3 лет до 6 лет'
    },
    {
        value: 'none', label: 'Более 6 лет'
    },
]


const Experience = () => {
    const dispatch = useDispatch();
    const checkedExperience = useSelector((state: RootState) => state.vacancy.selectedExperience)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addSelectedExperience(e.target.value))
    }
    return (
        <div>
            {
                MOCKED_EXPERIENCE.map((item, index) => (
                    <div key={index} className={'flex items-center gap-2 py-1 font-inter text-balance'}>
                        <input checked={checkedExperience === item.value} className={"w-5 h-5"} type="radio"
                               value={item.value} name='experience' onChange={handleChange}/>
                        <p>{item.label}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Experience;