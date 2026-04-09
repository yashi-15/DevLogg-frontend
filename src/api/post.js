import apiClient from "./axios/axios"

export const createPost = async(data) => {
    const response = await apiClient("/post/create", {...data})
    return response.data
}