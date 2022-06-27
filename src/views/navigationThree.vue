<template>
    <div>
         <el-select v-model="value" placeholder="请选择添加人员">
            <el-option
            v-for="item in options"
            :key="item.name"
            :label="item.name"
            :value="item.name">
            </el-option>
        </el-select>
        <el-button  @click="addPerson">添加</el-button>
        <el-button  @click="rest">还原</el-button>
        <el-table
            :data="filterTable"
            :border='true'
            style="width: 100%;marginTop:10px">
            <el-table-column
                align="center"
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                align="center"
                prop="sex"
                label="性别">
            </el-table-column>
            <el-table-column
                align="center"
                prop="age"
                label="年龄">
            </el-table-column>
            <el-table-column
                align="center"
                prop="hobby"
                label="爱好">
            </el-table-column>
        </el-table>
        <h3 style="marginTop:10px;">此时表格总人数为：{{filterTable.length}}</h3>
        <h3 style="marginTop:10px;">表格第一个人的名字为：{{onePersonName}}</h3>
        <h3 style="marginTop:10px;">此时导航二组件的计算总和为：{{count}}</h3>
    </div>
</template>
<script>

export default {
    data() {
        return {
           value:'',
           options: [
                {name: '王朝', sex:'男',age:21,hobby:'武术'}, 
                {name: '马汉', sex:'男',age:22,hobby:'打游戏'}, 
                {name: '张龙', sex:'女',age:20,hobby:'玩轮滑'}, 
                {name: '赵虎', sex:'男',age:19,hobby:'交朋友'},
                {name: '王二', sex:'男',age:16,hobby:'睡觉'}, 
                {name: '麻子', sex:'男',age:17,hobby:'学习'},  
            ],
          tableData: [
              {name: '张三', sex:'男',age:18,hobby:'唱歌'}, 
              {name: '李四', sex:'女',age:20,hobby:'跳舞'},   
          ],
        }
    },
    computed:{
       filterTable(){
          return this.$store.state.addPersonOption.filterTable
       },
       count(){
          return this.$store.state.countOptions.count
       },
       onePersonName(){
           return this.$store.getters['addPersonOption/onePersonName']
       }
    },
    mounted(){
      this.initTable()
    },
    methods:{
        initTable(){
            var person = this.filterTable.length == 0 ? this.tableData  :  this.filterTable
            this.$store.commit('addPersonOption/RESTPERSON',person)
        },
        addPerson(){
            var obj = {
                value:this.value,
                options:this.options
            }
            this.$store.dispatch('addPersonOption/addPerson',obj)
        },
        rest(){
           this.$store.dispatch('addPersonOption/restPerson',this.tableData)
        }

    }
}
</script>
<style lang='less' scoped>
</style>