import {useSelector} from "react-redux";
import {RootState} from "../../store";

export const useAddVacancy = () => {
    const position = useSelector((state: RootState) => state.vacancy.position)
    const id = useSelector((state: RootState) => state.vacancy.id)
    const aboutCompany = useSelector((state: RootState) => state.vacancy.aboutCompany)
    const neededPosHired = useSelector((state: RootState) => state.vacancy.neededPosHired)
    const industry = useSelector((state: RootState) => state.vacancy.industry)
    const vacancyDescription = useSelector((state: RootState) => state.vacancy.vacancyDescription)
    const requiredSkills = useSelector((state: RootState) => state.vacancy.requiredSkills)
    const typeOfSalary = useSelector((state: RootState) => state.vacancy.typeOfSalary)
    const valueOfSalary = useSelector((state: RootState) => state.vacancy.valueOfSalary)
    const currencyOfSalary = useSelector((state: RootState) => state.vacancy.currencyOfSalary)
    const typeOfEmployment = useSelector((state: RootState) => state.vacancy.typeOfEmployment)
    const additionalInformation = useSelector((state: RootState) => state.vacancy.additionalInformation)
    const selectedExperience = useSelector((state: RootState) => state.vacancy.selectedExperience)

    return{
        position,
        id,
        aboutCompany,
        neededPosHired,
        industry,
        vacancyDescription,
        requiredSkills,
        typeOfSalary,
        valueOfSalary,
        currencyOfSalary,
        typeOfEmployment,
        additionalInformation,
        selectedExperience,
    }
}