import React from 'react';
import Header from "../components/Layout/Header/header";
import Button from "../components/button";
import {ROUTES} from "../utils/ROUTES";
import PlusIcon from "../components/Icons/plusIcon";
import {Link} from "react-router-dom";

const PrivateOfficePage = () => {
    return (
        <div>
            <Header/>
            <div className={'p-4 px-40'}>
                <div className={'flex items-center justify-start border rounded-2xl p-8 gap-16 w-full'}>
                    <Button className={'focus:underline focus:underline-offset-8 focus:text-blue-500'}>Мои
                        вакансии</Button>
                    <Button
                        className={'focus:underline focus:underline-offset-8 focus:text-blue-500'}>Кандидаты</Button>
                </div>
                <div>

                </div>
                <div className={'flex flex-col justify-center items-center gap-10 py-40'}>
                    <p className={'font-inter text-gray-400'}>
                        У вас нет никаких размещенных вакансий
                    </p>
                    <Link to={ROUTES.CREATE_VACANCY_PAGE}
                          className="flex items-center gap-2 text-gray-950 text-opacity-50 active:text-white border border-gray-300 bg-gray-100 shadow-md px-8 py-4 rounded-full text-center font-inter font-semibold active:bg-blue-500">
                        <PlusIcon/>
                        <Button>
                            Разместить
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivateOfficePage;