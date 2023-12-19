import React, {useState} from 'react';
import Layout from "../components/layout";
import {Link} from "react-router-dom";
import Button from "../components/button";
import Employer from "../components/employer";
import Applicant from "../components/applicant";

const BUTTON_TYPES = {
    APPLICANT: 'applicant',
    EMPLOYER: 'employer',
    NULL: 'null'
}

const SignUp = () => {
    const [isButtonSelected, setIsButtonSelected] = useState(BUTTON_TYPES.NULL);

    const handleButtonClick = (value) => {
        if (value === BUTTON_TYPES.EMPLOYER) {
            if (isButtonSelected === BUTTON_TYPES.EMPLOYER) {
                setIsButtonSelected(BUTTON_TYPES.NULL)
            } else {
                setIsButtonSelected(BUTTON_TYPES.EMPLOYER)
            }

        } else if (value === BUTTON_TYPES.APPLICANT) {
            if (isButtonSelected === BUTTON_TYPES.APPLICANT) {
                setIsButtonSelected(BUTTON_TYPES.NULL)
            } else {
                setIsButtonSelected(BUTTON_TYPES.APPLICANT)
            }
        }
    }

    return (
        <Layout>
            <div className="container sm:mx-auto">
                <div className='flex flex-col py-16 items-center'>
                    <div className='flex flex-col'>
                        <h3 className='text-black font-inter text-4xl font-semibold'>Создайте аккаунт</h3>
                        <p className='pt-20 pb-10'>Выберите роль:</p>
                        <div className='flex gap-6'>
                            <Button
                                name="Я соискатель"
                                className={`py-6 px-20 rounded-md bg-white shadow-md w-200 h-16 flex-shrink-0 flex items-center ${isButtonSelected === BUTTON_TYPES.APPLICANT ? 'bg-blue-600 text-white' : undefined}`}
                                onClick={() => handleButtonClick(BUTTON_TYPES.APPLICANT)}
                            />
                            <Button
                                name='Я работодатель'
                                className={`p-6 pl-16 pr-16 rounded-md bg-white shadow-md w-200 h-16 flex-shrink-0 flex items-center ${isButtonSelected === BUTTON_TYPES.EMPLOYER ? 'bg-blue-600 text-white' : undefined}`}
                                onClick={() => handleButtonClick(BUTTON_TYPES.EMPLOYER)}
                            />
                        </div>
                        {isButtonSelected === BUTTON_TYPES.APPLICANT && <Applicant/>}
                        {isButtonSelected === BUTTON_TYPES.EMPLOYER && <Employer/>}
                        {isButtonSelected !== BUTTON_TYPES.NULL && (
                            <div className='mt-6 flex flex-col gap-6'>
                                <button
                                    className="rounded-full border-2 border-black p-4 shadow-md hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    Создать аккаунт
                                </button>
                                <Link to={'https://www.google.com/'}
                                      className="rounded-full border-2 border-black p-4 shadow-md flex items-center justify-center gap-4 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                                             viewBox="0 0 48 48">
<path fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path
                                            fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path
                                            fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path
                                            fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
                                    </span>
                                    Продолжить с Google
                                </Link>
                                <Link to={'https://www.linkedin.com/'}
                                      className="rounded-full border-2 border-black p-4 shadow-md flex items-center justify-center gap-4 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                             viewBox="0 0 25 25" fill="none">
  <g clipPath="url(#clip0_1804_2371)">
    <path
        d="M23.1545 0H1.84549C1.35603 0 0.886626 0.194435 0.540531 0.540531C0.194435 0.886626 0 1.35603 0 1.84549V23.1545C0 23.644 0.194435 24.1134 0.540531 24.4595C0.886626 24.8056 1.35603 25 1.84549 25H23.1545C23.644 25 24.1134 24.8056 24.4595 24.4595C24.8056 24.1134 25 23.644 25 23.1545V1.84549C25 1.35603 24.8056 0.886626 24.4595 0.540531C24.1134 0.194435 23.644 0 23.1545 0ZM7.45139 21.2969H3.69271V9.35764H7.45139V21.2969ZM5.56944 7.70312C5.14309 7.70072 4.72699 7.57208 4.37368 7.33342C4.02037 7.09477 3.74567 6.7568 3.58425 6.36218C3.42283 5.96755 3.38192 5.53395 3.4667 5.1161C3.55147 4.69825 3.75813 4.31487 4.06058 4.01436C4.36303 3.71384 4.74772 3.50965 5.16611 3.42756C5.5845 3.34547 6.01783 3.38916 6.41141 3.55311C6.80499 3.71706 7.14119 3.99392 7.37757 4.34876C7.61395 4.7036 7.73992 5.12051 7.73958 5.54688C7.74361 5.83233 7.69012 6.11567 7.5823 6.38C7.47449 6.64434 7.31456 6.88427 7.11205 7.08549C6.90954 7.2867 6.66859 7.44509 6.40357 7.5512C6.13854 7.65731 5.85486 7.70898 5.56944 7.70312ZM21.3056 21.3073H17.5486V14.7847C17.5486 12.8611 16.7309 12.2674 15.6753 12.2674C14.5608 12.2674 13.467 13.1076 13.467 14.8333V21.3073H9.70833V9.36632H13.3229V11.0208H13.3715C13.7344 10.2865 15.0052 9.03125 16.9444 9.03125C19.0417 9.03125 21.3073 10.276 21.3073 13.9219L21.3056 21.3073Z"
        fill="#0A66C2"/>
  </g>
  <defs>
    <clipPath id="clip0_1804_2371">
      <rect width="25" height="25" fill="white"/>
    </clipPath>
  </defs>
</svg>
                                    </span>
                                    Продолжить с LinkedIn
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className='p-20'>
                        <Link to={'/signIn'}>У вас уже есть аккаунт? <span className='font-bold'>Войти</span></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;