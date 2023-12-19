import React from 'react';
import Layout from "../components/layout";
import VacancyCard from "../components/vacancyCard";
import CategoryCard from "../components/categoryCard";
import InputJobSearch from "../components/inputJobSearch";

const HomePage = () => {
    return (
        <Layout>
            <section>
                <div>
                    <h3 className={'uppercase'}>Поиск работы по всему Кыргыстану</h3>
                    <InputJobSearch />
                </div>
            </section>
            <section>
                <VacancyCard company='Fortylines IO' location='Кыргызстан, Бишкек' position='Менеджер по продажам'
                             infotech='Информационный технологии' salary='50 000 сом' workday='Полная занятость'
                             experience='От 1 года до 3 лет'/>
            </section>
            <section className={"bg-custom-100"}>
                <h3 className="text-black font-inter text-3xl font-semibold">Популярные категории</h3>
                <CategoryCard title={'Искусство, развлечение'} quantity={'35 вакансий'}/>
            </section>
            <section>
                <div></div>
            </section>
        </Layout>
    );
};

export default HomePage;