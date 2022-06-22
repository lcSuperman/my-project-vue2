import http from '../utils/http'

export function getMenus(params){
    return http.get('/getMenusData',params)
}