import { http } from "../config"

export default {
    getrecebimentosRef: (dataRef) => {
        return http.get('/recebimentoRef', { params: { dataRef } })
    }
}
