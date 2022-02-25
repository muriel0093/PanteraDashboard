import {http} from "../config" 

export default {
    getativos:() => {
        return http.get('/ativos')
    }
}