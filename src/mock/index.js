// index.js
import Mock from "mockjs"
import menusData from './mockData/menusData'
import graphData from './mockData/graphData.json'
import dagreData from './mockData/dagreData'
import echartData from './mockData/echartData'

// Mock.mock(url,method,chartData) 三个参数对应 api地址、请求方式、数据源

Mock.mock("/getMenusData",'get',menusData) 
Mock.mock("/graphData",'get',graphData) 
Mock.mock("/dagreData",'get',dagreData) 
Mock.mock("/echartData",'get',echartData) 

