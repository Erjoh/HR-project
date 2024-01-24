export interface AppState {
    isLoading: boolean,
    role: RoleTypes,
    isAuth: boolean,
}

export const enum RoleTypes {
    COMPANY = 'company',
    EMPLOYEE = 'employee',
    NULL = 'null'
}