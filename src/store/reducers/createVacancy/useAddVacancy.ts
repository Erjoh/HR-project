import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store";
import {createVacancy} from "./createVacancy";
import {VacancyState} from "./vacancyTypes";

export const useAddVacancy = () => {
    const dispatch = useAppDispatch()
    const vacancyAdded = useSelector((state: RootState) => state.vacancy.vacancyAdded)
    const position = useSelector((state: RootState) => state.vacancy.position)
    const id = useSelector((state: RootState) => state.vacancy.id)
    const description = useSelector((state: RootState) => state.vacancy.description)
    const neededPosHired = useSelector((state: RootState) => state.vacancy.neededPosHired)
    const industry = useSelector((state: RootState) => state.vacancy.industry)
    const vacancyDescription = useSelector((state: RootState) => state.vacancy.descriptionVacancy)
    const skills = useSelector((state: RootState) => state.vacancy.skills)
    const typeOfSalary = useSelector((state: RootState) => state.vacancy.salaryResponse.fixed)
    const firstPrice = useSelector((state: RootState) => state.vacancy.salaryResponse.firstPrice)
    const lastPrice = useSelector((state: RootState) => state.vacancy.salaryResponse.last)
    const currencyOfSalary = useSelector((state: RootState) => state.vacancy.salaryResponse.valuta)
    const typeOfEmployment = useSelector((state: RootState) => state.vacancy.typeOfEmployment)
    const address = useSelector((state: RootState) => state.vacancy.contactInformationRequest.address)
    const city = useSelector((state: RootState) => state.vacancy.contactInformationRequest.city)
    const country = useSelector((state: RootState) => state.vacancy.contactInformationRequest.country)
    const selectedExperience = useSelector((state: RootState) => state.vacancy.experience)
    const additionalInformation = useSelector((state: RootState) => state.vacancy.additionalInformation)

    const addVacancy = () => {
        const newVacancy: VacancyState = {
            vacancyAdded: vacancyAdded,
            position: position,
            id: id,
            neededPosHired: neededPosHired,
            description: description,
            industry: industry,
            descriptionVacancy: vacancyDescription,
            skills: skills,
            salaryResponse: {
                firstPrice: firstPrice,
                last: lastPrice,
                valuta: currencyOfSalary,
                fixed: typeOfSalary,
            },
            typeOfEmployment: typeOfEmployment,
            contactInformationRequest: {
                address: address,
                city: city,
                country: country
            },
            experience: selectedExperience,
            additionalInformation: additionalInformation
        }
        dispatch(createVacancy(newVacancy))
    }
    return {
        vacancyAdded,
        position,
        id,
        description,
        neededPosHired,
        industry,
        vacancyDescription,
        skills,
        typeOfSalary,
        firstPrice,
        lastPrice,
        currencyOfSalary,
        typeOfEmployment,
        address,
        city,
        country,
        selectedExperience,
        additionalInformation,
        addVacancy
    }
}