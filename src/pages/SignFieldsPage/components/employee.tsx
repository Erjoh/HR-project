import React, {ChangeEvent} from 'react';
import InputFirstName from "./inputFirstName";
import InputLastName from "./inputLastName";
import InputEmail from "./inputEmail";
import InputPassword from "./inputPassword";
import {useDispatch} from "react-redux";
import {addSignUpEmail, addSignUpPassword} from "../../../store/reducers/signUp/signUpSlice";

const Employee = () => {
    const dispatch = useDispatch()
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addSignUpEmail(e.target.value))
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addSignUpPassword(e.target.value))
    }
    return (
        <div className={'mt-6 flex flex-col gap-6'}>
            <InputFirstName placeholder={'Имя'}/>
            <InputLastName placeholder={'Фамилия'}/>
            <InputEmail onChange={handleEmailChange} placeholder={'Электронная почта'}/>
            <InputPassword onChange={handlePasswordChange} placeholder={'Пароль'}/>
        </div>
    );
};

export default Employee;