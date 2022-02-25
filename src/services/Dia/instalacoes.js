import { http } from "../config"

export default {
    getinstalacoes: (dataIni, dataFim) => {
        return http.get('/instalacoes', { params: { dataIni, dataFim } })
    }
}
