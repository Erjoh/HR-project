import React, {ChangeEvent} from 'react';
import InputNameOfCompany from "./inputNameOfCompany";
import InputEmail from "./inputEmail";
import InputPassword from "./inputPassword";
import {useDispatch} from "react-redux";
import {addSignUpEmail, addSignUpPassword} from "../../../store/reducers/signUp/signUpSlice";

const Company = () => {
    const dispatch = useDispatch()
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addSignUpEmail(e.target.value))
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addSignUpPassword(e.target.value))
    }
    return (
        <div className={'mt-6 flex flex-col gap-6'}>
            <InputNameOfCompany placeholder={"Наименование компании"}/>
            <InputEmail onChange={handleEmailChange} placeholder={"Электронная почта"}/>
            <InputPassword onChange={handlePasswordChange} placeholder={"Введите пароль"}/>
        </div>
    );
};

export default Company;