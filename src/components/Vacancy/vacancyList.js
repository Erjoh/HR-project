import React from 'react';
import {useNavigate} from "react-router-dom";
import InputAboutCompany from "./inputs/inputAboutCompany";
import SelectPosition from "./selects/selectPosition";
import SelectIndustry from "./selects/selectIndustry";
import InputVacancyDescription from "./inputs/inputVacancyDescription";
import InputRequiredSkills from "./inputs/inputRequiredSkills";
import SelectTypeOfSalary from "./selects/selectTypeOfSalary";
import InputSalaryValue from "./inputs/inputSalaryValue";
import SelectCurrency from "./selects/selectCurrency";
import SelectTypeOfEmployment from "./selects/selectTypeOfEmployment";
import Experience from "./experience";
import ContactInformation from "./contactInformation";
import InputAdditionalInformation from "./inputs/inputAdditionalInformation";
import Button from "../button";
// import {useDispatch} from "react-redux";
// import {addHired, addVacancy} from "../../store/reducers/createVacancy/vacancySlice";
import InputNeededPosHired from "./inputs/inputNeededPosHired";

const VacancyList = () => {
    const navigate = useNavigate()
    // const [vacancy, setVacancy] = useState()
    // const handleAddVacancy = () => {
    //     // dispatch(addVacancy(vacancy))
    // }

    return (
        <div className={'py-24 px-16 w-1/2 items-stretch'}>
            <div>
                <h1 className={'font-inter text-3xl font-bold px-16'}>Добавление новой вакансии</h1>
            </div>
            <div className={'flex items-center py-16 px-16'}>
                <input type="file" className={'rounded-full border h-16 w-16 cursor-pointer flex items-center justify-center'}/>
                <p>Fortylines IO</p>
            </div>
            <div className={'px-16 pb-10'}>
                <h3 className={'font-inter text-1xl font-bold'}>О компании
                    <span
                        className={'text-red-600'}>*
                    </span>
                </h3>
                <InputAboutCompany/>
            </div>
            <div className={'px-16'}>
                <div className={'pb-4'}>
                    <h3 className={'font-inter text-1xl font-bold'}>Позиция
                        <span
                            className={'text-red-600'}>*
                        </span>
                    </h3>
                    <SelectPosition/>
                </div>
                <div className={'flex pb-4 justify-end'}>
                    <InputNeededPosHired/>
                </div>
            </div>
            <div className={'px-16 pb-10'}>
                <h3 className={'font-inter text-1xl font-bold'}>Отрасль
                    <span
                        className={'text-red-600'}>*
                    </span>
                </h3>
                <SelectIndustry/>
            </div>
            <div className={'px-16 pb-10'}>
                <h3 className={'font-inter text-1xl font-bold'}>Описание к вакансии <span
                    className={'text-red-600'}>*</span></h3>
                <InputVacancyDescription/>
            </div>
            <div className={'px-16 pb-10'}>
                <h3 className={'font-inter text-1xl font-bold'}>Требуемые навыки
                    <span
                        className={'text-red-600'}>*
                    </span>
                </h3>
                <InputRequiredSkills/>
            </div>
            <div className={'px-16 pb-10'}>
                <h3 className={'font-inter text-1xl font-bold'}>Оклад
                    <span
                        className={'text-red-600'}>*
                    </span>
                </h3>
                <div className={'gap-4 flex'}>
                    <SelectTypeOfSalary/>
                    <InputSalaryValue/>
                    <SelectCurrency/>
                </div>
            </div>
            <div className={'px-16 pb-10'}>
                <h3 className={'font-inter text-1xl font-bold'}>Вид занятости
                    <span
                        className={'text-red-600'}>*
                    </span>
                </h3>
                <SelectTypeOfEmployment/>
            </div>
            <div className={'px-16 pb-10'}>
                <h3 className={'font-inter text-1xl font-bold'}>Опыт работы/стаж
                    <span
                        className={'text-red-600'}>*
                    </span>
                </h3>
                <div className={'flex flex-col gap-4 py-4'}>
                    <Experience/>
                    <div className={'flex flex-col items-start gap-4'}>
                        <h3 className={'font-inter text-1xl font-bold gap-4 flex flex-col'}>Контактная информация</h3>
                        <ContactInformation/>
                    </div>
                </div>
            </div>
            <div className={'px-16 pb-16'}>
                <h3 className={'font-inter text-1xl font-bold'}>Дополнительная информация</h3>
                <InputAdditionalInformation/>
            </div>
            <div className={'flex gap-4 items-center px-16 justify-end'}>
                <Button
                    className={'border border-gray-300 px-10 py-4 rounded-full flex items-center text-gray-950 text-opacity-50 text-center font-inter active:bg-blue-500 active:text-white'}
                    // onClick={handleAddVacancy}
                >Разместить вакансию
                </Button>
                <Button
                    className={'border border-gray-300 px-10 py-4 rounded-full flex items-center text-gray-950 text-opacity-50 text-center font-inter active:bg-blue-500 active:text-white'}
                    onClick={() => navigate(-1)}
                >Отмена
                </Button>
            </div>
        </div>
    );
};

export default VacancyList;