import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../button";
import InstagramIcon from "./Icons/instagramIcon";
import FacebookIcon from "./Icons/facebookIcon";
import YoutubeIcon from "./Icons/youtubeIcon";
import TwitterIcon from "./Icons/twitterIcon";
import BorderLogoIcon from "../../Icons/borderLogoIcon";
import {ROUTES} from "../../../utils/ROUTES";

const Footer = () => {
    return (
        <footer className={'bg-custom-100 py-12 px-20'}>
            <section>
                <div className={'flex justify-between'}>
                    <div className={'flex flex-col gap-24'}>
                        <div className={'flex gap-14'}>
                            <div className="logo">
                                <Link to={ROUTES.HOME_PAGE}>
                                    <BorderLogoIcon/>
                                </Link>
                            </div>
                            <div className={'flex flex-col gap-4'}>
                                <h3 className={'py-4 font-bold'}>Контакты</h3>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Кыргызстан, г. Бишкек</p>
                                <p className="text-custom-300 font-inter leading-6 font-thin">ул. Токтогула 112/1</p>
                                <p className="text-custom-300 font-inter leading-6 font-thin">+996 (706) 11 22 33</p>
                            </div>
                            <div className={'flex flex-col gap-4'}>
                                <h3 className={'py-4 font-bold'}>Соискателям</h3>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Личный кабинет</p>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Вакансии</p>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Работодатели</p>
                            </div>
                            <div className={'flex flex-col gap-4'}>
                                <h3 className={'py-4 font-bold'}>Работодателям</h3>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Личный кабинет</p>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Опубликовать вакансии</p>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Кандидаты</p>
                            </div>
                            <div className={'flex flex-col gap-4'}>
                                <h3 className={'py-4 font-bold'}>Меню</h3>
                                <Link className="text-custom-300 font-inter leading-6 font-thin"
                                      to={ROUTES.VACANCIES}>Вакансии</Link>
                                <Link className="text-custom-300 font-inter leading-6 font-thin"
                                      to={ROUTES.FAQ}>FAQ</Link>
                                <Link className="text-custom-300 font-inter leading-6 font-thin"
                                      to={ROUTES.CONTACTS}>Контакты</Link>
                            </div>
                            <div className={'flex flex-col gap-4'}>
                                <h3 className={'py-4 font-bold'}>Поддержка</h3>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Правила размещения
                                    вакансий</p>
                                <p className="text-custom-300 font-inter leading-6 font-thin">Политика
                                    конфиденциальности</p>
                            </div>
                        </div>
                        <div className={'flex justify-between'}>
                            <p className={'font-inter text-custom-400 font-thin pl-32'}>© 2023. DevsFactory. All Right
                                Reserved.</p>
                            <div className={'flex gap-10'}>
                                <Link to={''}>
                                    <InstagramIcon/>
                                </Link>
                                <Link to={''}>
                                    <FacebookIcon/>
                                </Link>
                                <Link to={''}>
                                    <YoutubeIcon/>
                                </Link>
                                <Link to={''}>
                                    <TwitterIcon/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={'flex flex-col gap-2'}>
                            <h3 className={'font-bold pb-4'}>Оставить заявку</h3>
                            <input className={'rounded-md border border-gray-300 bg-white py-4 pl-4 pr-20'} type="text"
                                   placeholder={'Ваше имя'}/>
                            <input className={'rounded-md border border-gray-300 bg-white py-4 pl-4 pr-20'} type="text"
                                   placeholder={'Ваш номер телефона'}/>
                            <input className={'rounded-md border border-gray-300 bg-white py-4 pl-4 pr-20'} type="text"
                                   placeholder={'Сообщение'}/>
                        </div>
                        <div className={'flex justify-end pt-6'}>
                            <Button
                                className={'active:bg-custom-500 active:text-white border border-gray-300 p-4 px-10 rounded-full'}>
                                Отправить
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            </section>
        </footer>
    );
};

export default Footer;