import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {VacancyState} from "./vacancyTypes";

const initialState: VacancyState = {
    position: '',
    id: '0',
    aboutCompany: '',
    neededPosHired: false,
    industry: '',
    vacancyDescription: '',
    requiredSkills: '',
    typeOfSalary: '',
    valueOfSalary: '0',
    currencyOfSalary: '',
    typeOfEmployment: '',
    additionalInformation: '',
    selectedExperience: '',
};


const vacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: {
        addPosition: (state, action: PayloadAction<string>) => {
            state.position = action.payload
        },
        addInfo: (state, action: PayloadAction<string>) => {
            state.aboutCompany = action.payload
        },
        addHired: (state, action: PayloadAction<boolean>) => {
            state.neededPosHired = action.payload;
        },
        addIndustry: (state, action: PayloadAction<string>) => {
            state.industry = action.payload
        },
        addDescription: (state, action: PayloadAction<string>) => {
            state.vacancyDescription = action.payload
        },
        addRequiredSkills: (state, action: PayloadAction<string>) => {
            state.requiredSkills = action.payload
        },
        addTypeOfSalary: (state, action: PayloadAction<string>) => {
            state.typeOfSalary = action.payload
        },
        addValueOfSalary: (state, action: PayloadAction<string>) => {
            state.valueOfSalary = action.payload
        },
        addCurrencyOfSalary: (state, action: PayloadAction<string>) => {
            state.currencyOfSalary = action.payload
        },
        addTypeOfEmployment: (state, action: PayloadAction<string>) => {
            state.typeOfEmployment = action.payload
        },
        addAdditionalInformation: (state, action: PayloadAction<string>) => {
            state.additionalInformation = action.payload
        },
        addSelectedExperience: (state, action: PayloadAction<string>) => {
            state.selectedExperience = action.payload;
        }
    }
});

export const {
    addPosition,
    addInfo,
    addHired,
    addIndustry,
    addDescription,
    addRequiredSkills,
    addTypeOfSalary,
    addValueOfSalary,
    addCurrencyOfSalary,
    addTypeOfEmployment,
    addAdditionalInformation,
    addSelectedExperience,
} = vacancySlice.actions;

export default vacancySlice.reducer