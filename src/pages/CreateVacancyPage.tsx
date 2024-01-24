import React from 'react';
import VacancyList from "../components/Vacancy/vacancyList";
import Layout from "../components/Layout/layout";

const CreateVacancyPage = () => {
    return (
        <Layout>
            <div>
                <VacancyList />
            </div>
        </Layout>
    );
};

export default CreateVacancyPage;