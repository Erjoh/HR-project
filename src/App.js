import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Vacancies from "./pages/Vacancies";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ConfirmationPage from "./pages/ConfirmationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/vacancies' element={<Vacancies/>}/>
            <Route path='/frequentlyAskedQuestions' element={<FAQ/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/signIn' element={<SignIn/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/confirmationCode' element={<ConfirmationPage />}/>
            <Route path='/passwordReset' element={<ResetPasswordPage />}/>
        </Routes>
    );
};

export default App;