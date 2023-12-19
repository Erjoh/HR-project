import React from 'react';
import InputNameOfCompany from "./inputNameOfCompany";
import InputEmail from "./inputEmail";
import InputPassword from "./inputPassword";

const Employer = () => {
    return (
        <div className={'mt-6 flex flex-col gap-6'}>
            <InputNameOfCompany type={"text"} placeholder={"Наименование компании"}/>
            <InputEmail type={"text"} placeholder={"Электронная почта"}/>
            <InputPassword placeholder={"Введите пароль"}/>
        </div>
    );
};

export default Employer;