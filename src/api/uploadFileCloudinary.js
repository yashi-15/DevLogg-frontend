import apiClient from "./axios/axios"


export const uploadFileInCloudinary = async (file) => {

    const data = new FormData()
    data.append('file', file)

    const response = await apiClient.post('/cloudinary/upload', data)
    return {
        secure_url: response.data.secure_url,
        public_id: response.data.public_id
    }
}

export const deleteFileInCloudinary = async (public_id) => {
    await apiClient.delete('/cloudinary/delete', {
        data: {public_id}
    })
}