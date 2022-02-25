import axios from 'axios'


export const http = axios.create({
    baseURL: 'http://192.168.1.48:8082/intranet',
    headers: {
        'Authorization': 'Basic dGVzdHNlcnZlcjp0ZXN0c2VydmVy'
    }
})