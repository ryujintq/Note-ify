import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.56.1:3001/api/v1'
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        config.headers['Content-Type'] = 'application/json';
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance
