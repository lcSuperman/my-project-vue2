<template>
   <div class="tableOne">
      <div class="riskTitle">
         <span>客户风险</span>
      </div>
      <div class="riskForm">
         <h3>融资性</h3>
         <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="客户名称：">
               <el-input v-model="formInline.user" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="业务条线">
               <el-select v-model="formInline.region" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
               </el-select>
            </el-form-item>
             <el-form-item label="业务条线">
               <el-select v-model="formInline.level" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
               </el-select>
            </el-form-item>
             <el-form-item label="业务条线">
               <el-select v-model="formInline.part" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
               </el-select>
            </el-form-item>
            <el-form-item class="lastFormItem">
               <el-button  @click="onSubmit">重置</el-button>
               <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
         </el-form>
         <el-table
            :data="tableData"
            style="width: 100%;"
            height="520"
            :default-sort = "{prop: 'date', order: 'descending'}"
            v-tableHeight="{bottomOffset: 10}"
            >
            <el-table-column
               prop="name"
               label="客户名称"
               width="90">
            </el-table-column>
            <el-table-column
               prop="card"
               label="客户证件号"
               width="150"
               show-overflow-tooltip>
            </el-table-column>
            <el-table-column
               prop="line"
               label="业务条线">
            </el-table-column>
            <el-table-column
               prop="day"
               label="最长逾期天数"
               sortable>
            </el-table-column>
            <el-table-column
               prop="range"
               label="当前五级风险分类"
               width="150">
            </el-table-column>
            <el-table-column
               prop="count"
               label="总合同个数"
               sortable>
            </el-table-column>
            <el-table-column
               prop="nomal"
               label="正常合同数"
               sortable>
            </el-table-column>
            <el-table-column
               prop="total"
               label="逾期合同数"
               sortable>
            </el-table-column>
            <el-table-column
               prop="depart"
               label="主办部门">
            </el-table-column>
            <el-table-column
               prop="user"
               label="主办客户经理">
            </el-table-column>
            <el-table-column
               prop="user1"
               label="协办客户经理">
            </el-table-column>
            <el-table-column
               prop="address"
               label="客户所属区域"
               show-overflow-tooltip>
            </el-table-column>
            <el-table-column
               prop="time"
               label="最早逾期时间"
               sortable
               show-overflow-tooltip>
            </el-table-column>
         </el-table>
      </div>
    
        
    
   </div>
</template>
<script>
export default {
   data(){
      return{
         formInline: {
          user: '',
          region: '',
          level:'',
          part:''
        },
        tableData: [
         {name: '客户一意义',card: '412367199307048929',line: '普通融资租赁',day: '10',range: '次级',count: '10032',nomal: '233',total: '90',depart: '研发一部',user: '令狐冲',user1: '王小虎',address: '上海市',time: '2022-11-31 12:00:00'}, 
         {name: '客户一意义',card: '412367199307048929',line: '普通融资租赁',day: '10',range: '次级',count: '10032',nomal: '233',total: '90',depart: '研发一部',user: '令狐冲',user1: '王小虎',address: '上海市',time: '2022-11-31 12:00:00'}, 
         {name: '客户一意义',card: '412367199307048929',line: '普通融资租赁',day: '10',range: '次级',count: '10032',nomal: '233',total: '90',depart: '研发一部',user: '令狐冲',user1: '王小虎',address: '上海市',time: '2022-11-31 12:00:00'}, 
         ]
      }
   },
   methods: {
      formatter(row, column) {
        return row.address;
      }
   }
}
</script>
<style lang='less' scoped>
.tableOne{
    height: calc(100% - 85px);
    width: 100%;
    box-sizing: border-box;
    padding:30px 60px 10px;
    color: #fff;
    .riskTitle{
       height: 4%;
       font-size: 16px;
       font-weight: 700;
       border-bottom: 1px solid #2ba7b1;
    }
    .riskForm{
       width: 100%;
       height: 96%;
       overflow: hidden;
       h3{
         margin: 20px 0;
         color: #b08d54;
      }
      /deep/.el-form{
         .el-form-item{
            margin-right: 40px;
            .el-form-item__label{
               color: #fff;
            }
            .el-form-item__content{
               width: 250px;
               .el-input{
                  .el-input__inner{
                        color: #FFF !important;
                        background:rgba(255, 255, 255, 0);
                        border: 1px solid #2ba7b1;
                  }
               }
               .el-button{
                  height: 40px;
                  padding: 5px 20px;
               }
               .el-button--default{
                     color: #b08d54;
                     background:rgba(255, 255, 255, 0);
                     border: 1px solid #b08d54;
               }
               .el-button--default:active{
                  border-color: #8c6931;
                  background-color: #041e4b;
               }
               .el-button--primary{
                  color: #000;
                  background-color: #b08d54;
                  border: 1px solid #b08d54;
               }
               .el-button--primary:active {
                  background-color: #c19f68;
               }
            }
         }
         .lastFormItem{
            float: right;
            margin-right: 0;
         }
      }
      /deep/.el-table {
         background:rgba(255, 255, 255, 0);
         border: 1px solid #2ba7b1;
         border-radius: 10px;
         color: #fff;
         tr{
           background:rgba(255, 255, 255, 0);
         }
         td.el-table__cell, th.el-table__cell{
              background:rgba(255, 255, 255, 0);
              border-bottom:1px solid #2ba7b1;
         }
        
         .el-table__row:hover{
              background:rgba(255, 255, 255, 0.1);
         }
           


         .cell{
            line-height: 40px;
         }

      }

    }
}

</style>