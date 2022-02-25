 import { http } from "../config"

export default {
    getcancelamento: (dataIni, dataFim) => {
        return http.get('/cancelamentos', { params: { dataIni, dataFim } })
    }
}
