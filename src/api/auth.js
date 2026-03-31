import { useContext } from "react"
import { storeInSession } from "../common/sessions"
import apiClient from "./axios/axios"
import { UserContext } from "../context/UserContext"


export const authRegister = async (data) => {
    const response = await apiClient.post('/auth/register', {...data})
    storeInSession('user', JSON.stringify(response.data.data))     
    return response.data
}

export const authLogin = async (data) => {
    const response = await apiClient.post('/auth/login', {...data})
    storeInSession('user', JSON.stringify(response.data.data))    
    return response.data
}