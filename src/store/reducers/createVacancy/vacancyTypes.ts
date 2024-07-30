export interface VacancyState {
    vacancyAdded: boolean,
    position: string,
    id: string,
    description: string,
    neededPosHired: boolean,
    industry: string,
    descriptionVacancy: string,
    skills: string,
    salaryResponse: {
        firstPrice: string,
        last: string,
        valuta: string,
        fixed: string
    },
    typeOfEmployment: string,
    contactInformationRequest: {
        country: string,
        city: string,
        address: string,
    }
    experience: string,
    additionalInformation: string,
}