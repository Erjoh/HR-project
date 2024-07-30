import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {VacancyState} from "./vacancyTypes";

const initialState: VacancyState = {
    vacancyAdded: false,
    position: '',
    id: '0',
    description: '',
    neededPosHired: false,
    industry: '',
    descriptionVacancy: '',
    skills: '',
    salaryResponse: {
        firstPrice: '',
        last: '',
        valuta: '',
        fixed: '',
    },
    typeOfEmployment: '',
    contactInformationRequest: {
        country: '',
        city: '',
        address: '',
    },
    experience: '',
    additionalInformation: '',
};


const vacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: {
        vacancyAdded: (state, action: PayloadAction<boolean>) => {
            state.vacancyAdded = action.payload;
        },
        addPosition: (state, action: PayloadAction<string>) => {
            state.position = action.payload
        },
        addInfo: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        addHired: (state, action: PayloadAction<boolean>) => {
            state.neededPosHired = action.payload;
        },
        addIndustry: (state, action: PayloadAction<string>) => {
            state.industry = action.payload
        },
        addDescription: (state, action: PayloadAction<string>) => {
            state.descriptionVacancy = action.payload
        },
        addRequiredSkills: (state, action: PayloadAction<string>) => {
            state.skills = action.payload
        },
        addFirstPrice: (state, action: PayloadAction<string>) => {
            state.salaryResponse.firstPrice = action.payload
        },
        addLastPrice: (state, action: PayloadAction<string>) => {
            state.salaryResponse.last = action.payload
        },
        addFixedSalary: (state, action: PayloadAction<string>) => {
            state.salaryResponse.fixed = action.payload
        },
        addCurrencyOfSalary: (state, action: PayloadAction<string>) => {
            state.salaryResponse.valuta = action.payload
        },
        addTypeOfEmployment: (state, action: PayloadAction<string>) => {
            state.typeOfEmployment = action.payload
        },
        addAddress: (state, action: PayloadAction<string>) => {
            state.contactInformationRequest.address = action.payload
        },
        addCity: (state, action: PayloadAction<string>) => {
            state.contactInformationRequest.city = action.payload
        },
        addCountry: (state, action: PayloadAction<string>) => {
            state.contactInformationRequest.country = action.payload
        },
        addSelectedExperience: (state, action: PayloadAction<string>) => {
            state.experience = action.payload;
        },
        addAdditionalInformation: (state, action: PayloadAction<string>) => {
            state.additionalInformation = action.payload;
        },
    }
});

export const {
    vacancyAdded,
    addPosition,
    addInfo,
    addHired,
    addIndustry,
    addDescription,
    addRequiredSkills,
    addFirstPrice,
    addLastPrice,
    addFixedSalary,
    addCurrencyOfSalary,
    addTypeOfEmployment,
    addAddress,
    addCity,
    addCountry,
    addSelectedExperience,
    addAdditionalInformation,
} = vacancySlice.actions;

export default vacancySlice.reducer