import React, {ChangeEvent} from 'react';
import {Link, useNavigate} from "react-router-dom";
import InputEmail from "./components/inputEmail";
import InputPassword from "./components/inputPassword";
import {useDispatch} from "react-redux";
import GoogleIcon from "./Icons/googleIcon";
import LinkedinIcon from "./Icons/linkedinIcon";
import Button from "../../components/button";
import Header from "../../components/Layout/Header/header";
import {addSignInPassword} from "../../store/reducers/signIn/signInSlice";
import {ROUTES} from "../../utils/ROUTES";
import {useSignIn} from "../../store/reducers/signIn/useSignIn";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {authSignIn} = useSignIn()
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addSignInPassword(e.target.value))
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addSignInPassword(e.target.value))
    }

    const handleSignIn = () => {
        authSignIn(navigate)
    }
    return (
        <div>
            <Header/>
            <div className="container sm:mx-auto">
                <div className='flex flex-col py-16 items-center'>
                    <div className='flex flex-col'>
                        <h3 className='text-black font-inter text-4xl font-semibold'>Войти</h3>
                        <p className='pt-5 pb-10'>С возвращением! Пожалуйста, введите свои данные</p>
                        <div className='mt-6 flex flex-col gap-6 relative'>
                            <InputEmail onChange={handleEmailChange} placeholder={'Электронная почта'}/>
                            <InputPassword onChange={handlePasswordChange} placeholder={"Введите пароль"}/>
                            <Link to={ROUTES.RESET_PASSWORD_PAGE} className={'flex justify-end'}>
                                <span
                                    className={'flex text-custom-600 pb-10'}>Забыли пароль?
                                </span>
                            </Link>
                            <Button
                                onClick={handleSignIn}
                                className="rounded-full border-2 border-black p-4 shadow-md hover:bg-blue-500 hover:text-white hover:border-blue-500">Войти
                            </Button>
                            <Link to={'https://www.google.com/'}
                                  className="rounded-full border-2 border-black p-4 shadow-md flex items-center justify-center gap-4 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    <span>
                                        <GoogleIcon/>
                                    </span>
                                Продолжить с Google
                            </Link>
                            <Link to={'https://www.linkedin.com/'}
                                  className="rounded-full border-2 border-black p-4 shadow-md flex items-center justify-center gap-4 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    <span>
                                        <LinkedinIcon/>
                                    </span>
                                Продолжить с LinkedIn
                            </Link>
                        </div>
                    </div>
                    <div className='p-20'>
                        <Link to={ROUTES.SIGN_UP}>У вас нет аккаунта? <span
                            className='font-bold'>Создать аккаунт</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;