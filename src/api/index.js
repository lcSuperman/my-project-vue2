import http from '../utils/http'

export function getMenus(params){
    return http.get('/getMenusData',params)
}

export function getGraphData(params){
    return http.get('/graphData',params)
}

export function getDagreData(params){
    return http.get('/dagreData',params)
}