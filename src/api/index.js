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

export function getEchartData(params){
    return http.get('https://fastly.jsdelivr.net/npm/emoji-flags@1.3.0/data.json',params)
}
export function getEchartData1(params){
    return http.get('/echartData',params)
}