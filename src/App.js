import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Vacancies from "./pages/Vacancies";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import SignIn from "./pages/SignFieldsPage/SignIn";
import SignUp from "./pages/SignFieldsPage/SignUp";
import ConfirmationPage from "./pages/ConfirmPage/ConfirmationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import {ROUTES} from "./utils/ROUTES";
import CreateVacancyPage from "./pages/CreateVacancyPage";
import CreateNewPasswordPage from "./pages/CreateNewPasswordPage";
import PrivateOfficePage from "./pages/PrivateOfficePage";

const App = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME_PAGE} element={<HomePage/>}/>
            <Route path={ROUTES.VACANCIES} element={<Vacancies/>}/>
            <Route path={ROUTES.FAQ} element={<FAQ/>}/>
            <Route path={ROUTES.CONTACTS} element={<Contacts/>}/>
            <Route path={ROUTES.SIGN_IN} element={<SignIn/>}/>
            <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
            <Route path={ROUTES.CONFIRMATION_PAGE} element={<ConfirmationPage/>}/>
            <Route path={ROUTES.RESET_PASSWORD_PAGE} element={<ResetPasswordPage/>}/>
            <Route path={ROUTES.CREATE_VACANCY_PAGE} element={<CreateVacancyPage/>}/>
            <Route path={ROUTES.CREATE_NEW_PASSWORD} element={<CreateNewPasswordPage/>}/>
            <Route path={ROUTES.PRIVATE_OFFICE} element={<PrivateOfficePage/>}/>
        </Routes>
    );
};

export default App;