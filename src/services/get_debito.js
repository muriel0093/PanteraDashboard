import { http } from "./config"

export default {
    get_debito: (result) => {
        return http.get('/getdebitos', { params: { result } })
    }
}
