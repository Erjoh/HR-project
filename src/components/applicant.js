import React from 'react';
import InputName from "./inputName";
import InputSurname from "./inputSurname";
import InputEmail from "./inputEmail";
import InputPassword from "./inputPassword";

const Applicant = () => {
    return (
        <div className={'mt-6 flex flex-col gap-6'}>
            <InputName type={'text'} placeholder={'Имя'}/>
            <InputSurname type={'text'} placeholder={'Фамилия'} />
            <InputEmail type={'text'} placeholder={'Электронная почта'}/>
            <InputPassword placeholder={'Пароль'}/>
        </div>
    );
};

export default Applicant;