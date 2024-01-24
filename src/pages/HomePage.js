import React from 'react';
import Layout from "../components/Layout/layout";
import VacancyCard from "../components/Vacancy/vacancyCard";
import CategoryCard from "../components/categoryCard";
import InputJobSearch from "../components/inputJobSearch";
import {Link} from "react-router-dom";
import applicant from "../assets/applicant.png"
import employer from "../assets/employer.png"
import Direction from "../components/direction";
import ArrowForwardIcon from "../components/Icons/arrowForwardIcon";
import Button from "../components/button";

const HomePage = () => {
    return (
        <Layout>
            <section>
                <div className={'p-16'}>
                    <div className={'p-16'}>
                        <h3 className={'uppercase font-inter text-5xl font-bold w-8/12'}>Поиск работы по всему
                            Кыргыстану</h3>
                        <InputJobSearch/>
                        <div className={'flex items-center gap-4'}>
                            <h3>Часто ищут:</h3>
                            <Direction name={'Бухгалтерия'}/>
                        </div>
                    </div>
                    <div>
                        {/*<img src={searcher} alt=""/>*/}
                    </div>
                </div>
            </section>
            <section>
                <div className={'px-64 pb-32'}>
                    <div className={'py-16'}>
                        <h3 className="text-black font-inter text-3xl font-semibold">Последниие вакансии</h3>
                        <p>Найдите работу, которая соответствует вашим требованиям</p>
                    </div>
                    <div className={'flex flex-col items-center gap-4'}>
                        <Link to={''}>
                            <VacancyCard/>
                        </Link>
                        <div>
                            <Button
                                className={'border bg-custom-500 text-white rounded-full p-3 px-12 flex items-center font-inter mt-10'}>
                                Посмотреть все вакансии
                                <span>
                                    <ArrowForwardIcon/>
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={"bg-custom-100"}>
                    <div className={'px-64 pb-16'}>
                        <div className={'p-16'}>
                            <h3 className="text-black font-inter text-3xl font-semibold">Популярные категории</h3>
                        </div>
                        <div className={"px-16 flex flex-wrap gap-12 justify-between"}>
                            <Link to={''}>
                                <CategoryCard title={'Искусство, развлечение'} quantity={'35 вакансий'}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'p-16'}>
                <div className={'flex justify-center items-stretch gap-4 p-16'}>
                    <div className={'flex items-center overflow-hidden border rounded-3xl px-16 py-4 w-5/12   '}>
                        <div>
                            <h3 className={'font-inter font-bold text-2xl'}>Работодатель</h3>
                            <p className={'pt-4 pb-8 font-inter'}>Ищете в свою команду новых людей?</p>
                            <Link to={'/signUp'}
                                  className={'p-4 rounded-full border border-black'}>Зарегистрироваться</Link>
                        </div>
                        <div>
                            <img src={employer} alt=""/>
                        </div>
                    </div>
                    <div className={'flex items-center overflow-hidden border rounded-3xl px-16 pt-4 w-5/12'}>
                        <div>
                            <h3 className={'font-inter font-bold text-2xl'}>Соискатель</h3>
                            <p className={'pt-4 pb-8 font-inter'}>Ищете достойную работу?</p>
                            <Link to={'/signUp'}
                                  className={'p-4 rounded-full border border-black'}>Зарегистрироваться</Link>
                        </div>
                        <div>
                            <img src={applicant} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;