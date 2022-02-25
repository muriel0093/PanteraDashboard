import { http } from '../config'

export default {
    getdevedores:( dataRef ) => {
        return http.get('/devedores', {params: { dataRef }})
    }
}