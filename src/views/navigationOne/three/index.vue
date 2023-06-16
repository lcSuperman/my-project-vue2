<template>
    <div class="flow_content">
      
      <div class="table_content">
         <el-button size="small" type="primary" style="margin: 10px 0;" @click="newAdd">新建流程</el-button>
        . <el-table
            :data="tableData"
            border
            highlight-current-row=true
            style="width: 100%">
            <el-table-column
              prop="name"
              align="center"
              label="名称"
              >
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small"
                @click.native.prevent="viewFlow(scope.row)">
                  查看
                </el-button>
                <el-button type="text" size="small"
                @click.native.prevent="deleteRow(scope.$index, scope.row)">
                  移除
                </el-button>
               
              </template>
            </el-table-column>
          </el-table>
      </div>
      <flowChart
      ref="flow"
      :actionList="actionList"
      :funcList="funcList"
      :accountList="accountList"
      :workflowList="workflowList"
       @saveData="saveData"
      ></flowChart>
    </div>
  </template>
   
  <script>
    import flowChart from './components/flow.vue'
    import { v4 as uuidv4 } from "uuid";

    export default {
      data(){
        return {
          actionList:[
            {id:'001',label:'发送'},
            {id:'002',label:'成功'},
            {id:'003',label:'失败'}
          ],
          funcList:[],
          accountList:[],
          workflowList:[],
          tableData:[],
          clickName:"",//当前点击渲染的流程图

        }
      },
     components:{
      flowChart
     },
     mounted(){
      //初始化获取列表数据，如果有数据，画布就展示第一个流程，如果没有数据就为空集合
      var tables = localStorage.getItem('flowTable')
      if(tables){
        this.tableData = JSON.parse(tables)
        const {nodes, edges, name, type} = this.tableData[0]
        this.$refs.flow.source(nodes, edges, name, type)
      }else{
        this.tableData = []
      }
      
     },
     methods:{
      saveData(source,type){
        console.log('-----------',source,type)
        var isHave = false
        var indexNum 
        var filterTableData = this.tableData.filter( item => {
            return item.type !== type
        })
        filterTableData.forEach( (item,index) => {
            if(item.name == source.name){
              isHave = true
              indexNum = index
            }
        })
        if(type){
            //type有值，编辑
            if(isHave){
              //编辑的名称已存在
                this.$message({
                  message: '该名称已存在！',
                  type: 'warning'
                });
            }else{
              var obj = source
              obj.type = type
              this.tableData.splice(indexNum, 1,obj);
                this.$message({
                  message: '保存成功！',
                  type: 'success'
                });
            }
        }else{
          if(!isHave){
            //type无值，新建
            let uid = uuidv4()
            var obj = source
            obj.type = uid
            this.tableData.push(source)
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
          }else{
            this.$message({
              message: '该名称已存在！',
              type: 'warning'
            });
          }
         
        }
        var tables = JSON.stringify(this.tableData)
        localStorage.setItem('flowTable',tables)
      },
      //点击查看流程图
      viewFlow(row){
         this.clickName = row.name
         this.$refs.flow.clearView()
         const {nodes, edges, name, type} = row
        this.$refs.flow.source(nodes, edges, name, type)
      },
       //新建流程图，清空画布
      newAdd(){
        this.$refs.flow.clearView()
      },
      //删除单个列表并清空当前删除的画布
      deleteRow(index, row) {
        var leng = this.tableData.length
        if(this.clickName == row.name || index == leng -1 || leng == 0){
          this.$refs.flow.clearView()
        }
        this.tableData.splice(index, 1);
        var tables = JSON.stringify(this.tableData)
        localStorage.setItem('flowTable',tables)
      }
     }
    }
  </script>
   
  <style  lang="less" scoped>
   .flow_content{
      height: 100%;
      display: flex;
      justify-content: space-around;
      .table_content{
        width: 19%;
        box-sizing: border-box;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        padding: 0 10px;
      }
   }
  </style>