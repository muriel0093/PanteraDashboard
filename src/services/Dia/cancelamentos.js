import { http } from "../config"

export default {
    getcancelamentos: (dataIni, dataFim) => {
        return http.get('/cancelamentos', { params: { dataIni, dataFim } })
    }
}
