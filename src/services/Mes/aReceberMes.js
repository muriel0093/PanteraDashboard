import { http } from "../config"

export default {
    getreceber: (dataRef) => {
        return http.get('/receber', { params: { dataRef } })
    }
}
