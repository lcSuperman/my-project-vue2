<template>
    <div>
        <h3 style="marginBotton:10px;">此时导航三组件内总人数为：{{filterTable.length}}</h3>
        <h3>当前计算的和为：{{count}}</h3> 
        <h3 :style="{marginBottom:'10px'}">当前计算的和的10倍为：{{multipleCount }}</h3> 
        <el-select v-model.number="value" size="mini"  :style="{width:'60px'}" placeholder="0">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-button size="mini" @click="JIA(value)">+</el-button>
        <el-button size="mini" @click="JIAN(value)">-</el-button>
        <el-button size="mini" @click="oddJia(value)">和为奇数 +</el-button>
        <el-button size="mini" @click="asyncJia(value)">等1秒后 +</el-button>
        <el-button size="mini" @click="doubleAsync(value)">异步 + 后再等1秒后 +</el-button>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return{  
            options: [
                {value: 1,label: '1'},
                {value: 2,label: '2'},
                {value: 3,label: '3'}
            ],
            value: null
            }
    },
    computed:{
        ...mapGetters('countOptions',['multipleCount']),
        ...mapState('countOptions',['count']),
        ...mapState('addPersonOption',['filterTable'])
    },
    methods:{
        ...mapMutations('countOptions',['JIA','JIAN']),
        ...mapActions('countOptions',['oddJia','asyncJia']),
        doubleAsync(){
            this.asyncJia(this.value).then(() => {
              setTimeout(() => {
                 this.JIA(this.value)
              },1000)
            })
        }
    }
}
</script>
<style lang='less' scoped>
</style>