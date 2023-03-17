import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://example.com',
    timeout: 5000
})

export default api