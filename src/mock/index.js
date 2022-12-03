// index.js
import Mock from "mockjs"
import menusData from './mockData/menusData'
import graphData from './mockData/graphData.json'
import dagreData from './mockData/dagreData'
import echartData from './mockData/echartData'

import lineEchart from  './mockData/bigEchart/lineData.json'
import lineEchart1 from  './mockData/bigEchart/lineData1.json'
import lineEchart2 from  './mockData/bigEchart/lineData2.json'

// Mock.mock(url,method,chartData) 三个参数对应 api地址、请求方式、数据源

Mock.mock("/getMenusData",'get',menusData) 
Mock.mock("/graphData",'get',graphData) 
Mock.mock("/dagreData",'get',dagreData) 
Mock.mock("/echartData",'get',echartData) 

Mock.mock("/statisData",'get',lineEchart) 
Mock.mock("/statisData1",'get',lineEchart1) 
Mock.mock("/statisData2",'get',lineEchart2) 



