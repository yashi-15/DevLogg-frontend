import apiClient from "./axios/axios"

export const authRegister = async (data) => {
    const response = await apiClient.post('/auth/register', {...data})
    return response.data
}

export const authLogin = async (data) => {
    const response = await apiClient.post('/auth/login', {...data})
    return response.data
}