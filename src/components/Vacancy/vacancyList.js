import React from 'react';
import {useNavigate} from "react-router-dom";
import InputAboutCompany from "./inputs/inputAboutCompany";
import SelectPosition from "./selects/selectPosition";
import SelectIndustry from "./selects/selectIndustry";
import InputVacancyDescription from "./inputs/inputVacancyDescription";
import InputRequiredSkills from "./inputs/inputRequiredSkills";
import SelectTypeOfEmployment from "./selects/selectTypeOfEmployment";
import Experience from "./experience";
import ContactInformation from "./contactInformation";
import Button from "../button";
import InputNeededPosHired from "./inputs/inputNeededPosHired";
import InputAdditionalInformation from "./inputs/InputAdditionalInformation";
import Salary from "./salary";
import {useAddVacancy} from "../../store/reducers/createVacancy/useAddVacancy";

const VacancyList = () => {
    const navigate = useNavigate()
    const {addVacancy} = useAddVacancy()
    const handleAddVacancy = () => {
        addVacancy()
    }

    return (
        <div className={'py-24 px-16 w-1/2 items-stretch'}>
            <div>
                <h1 className={'font-inter text-3xl font-bold px-16'}>Добавление новой вакансии</h1>
            </div>
            <div className={'flex items-center py-16 px-16'}>
                <input type="file"
                       className={'rounded-full border h-16 w-16 cursor-pointer flex items-center justify-center'}/>
                <p>Fortylines IO</p>
            </div>
            <div className={'px-16 pb-10'}>
                <InputAboutCompany/>
            </div>
            <div className={'px-16'}>
                <div className={'pb-4'}>
                    <SelectPosition/>
                </div>
                <div className={'flex pb-4 justify-end'}>
                    <InputNeededPosHired/>
                </div>
            </div>
            <div className={'px-16 pb-10'}>
                <SelectIndustry/>
            </div>
            <div className={'px-16 pb-10'}>
                <InputVacancyDescription/>
            </div>
            <div className={'px-16 pb-10'}>
                <InputRequiredSkills/>
            </div>
            <div className={'px-16 pb-10'}>
                <Salary/>
            </div>
            <div className={'px-16 pb-10'}>
                <SelectTypeOfEmployment/>
            </div>
            <div className={'px-16 pb-10'}>
                <div className={'flex flex-col gap-4 py-4'}>
                    <Experience/>
                </div>
            </div>
            <div className={'px-16 pb-10'}>
                <div className={'flex flex-col items-start gap-4'}>
                    <ContactInformation/>
                </div>
            </div>
            <div className={'px-16 pb-16'}>
                <InputAdditionalInformation/>
            </div>
            <div className={'flex gap-4 items-center px-16 justify-end'}>
                <Button
                    className={'border border-gray-300 px-10 py-4 rounded-full flex items-center text-gray-950 text-opacity-50 text-center font-inter active:bg-blue-500 active:text-white'}
                    onClick={handleAddVacancy}
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