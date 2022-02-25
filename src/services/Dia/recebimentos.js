import { http } from '../config'

export default {
    getrecebimentos: ( dataIni, dataFim) => {
        return http.get('/recebimentos', {params: {dataIni, dataFim}})
    }
}