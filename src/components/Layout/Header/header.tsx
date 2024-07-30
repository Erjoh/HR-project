import React from 'react';
import Button from "../../button";
import {Link} from "react-router-dom";
import BorderLogoIcon from "../../Icons/borderLogoIcon";
import {ROUTES} from "../../../utils/ROUTES";
import {useAppSlice} from "../../../store/reducers/app/useAppSlice";
import PlusIcon from "../../Icons/plusIcon";
import MessageIcon from "./Icons/messageIcon";
import NotificationIcon from "./Icons/notificationIcon";
import DropdownAccount from "./Dropdown/dropdownAccount";

const Header = () => {
    const {isAuth} = useAppSlice()
    return (
        <header className='flex items-center justify-between px-32 py-6 shadow-lg'>
            <div className="flex items-center justify-between gap-4 px-4">
                <div className="">
                    <Link to={ROUTES.HOME_PAGE}>
                        <BorderLogoIcon/>
                    </Link>
                </div>
                <nav className="flex gap-14 items-center pl-10 text-gray-500">
                    {!isAuth ? <Link to={ROUTES.VACANCIES}>Вакансии</Link> : null}
                    <Link to={ROUTES.FAQ}>FAQ</Link>
                    <Link to={ROUTES.CONTACTS}>Контакты</Link>
                </nav>
            </div>
            <div className="flex gap-8">
                {isAuth ?
                    <>
                        <div className={'flex items-center gap-8'}>
                            <Link to={''}>
                                <MessageIcon/>
                            </Link>
                            <Link to={''}>
                                <NotificationIcon/>
                            </Link>
                        </div>
                        <div>
                            <DropdownAccount/>
                        </div>
                        <Link to={ROUTES.CREATE_VACANCY_PAGE}
                              className="flex items-center gap-2 text-gray-950 text-opacity-50 active:text-white border border-gray-300 bg-gray-100 shadow-md px-8 py-2 rounded-full text-center font-inter text-base font-semibold active:bg-blue-500">
                            <PlusIcon/>
                            <Button>
                                Создать вакансию
                            </Button>
                        </Link>
                    </>
                    :
                    <>
                        <Link to={ROUTES.SIGN_IN}>
                            <Button className="border border-gray-300 bg-gray-100 shadow-md px-16 py-4 rounded-full flex
                        items-center text-gray-950 text-opacity-50 text-center font-inter text-base font-semibold
                        active:bg-blue-500 active:text-white">Войти
                            </Button>
                        </Link>
                        <Link to={ROUTES.SIGN_UP}>
                            <Button className="border border-gray-300 bg-gray-100 shadow-md px-16 py-4 rounded-full flex
                        items-center text-gray-950 text-opacity-50 text-center font-inter text-base font-semibold
                        active:bg-blue-500 active:text-white">Регистрация
                            </Button>
                        </Link>
                    </>
                }
            </div>
        </header>
    );
};

export default Header;