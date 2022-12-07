<template>
    <div class="topTitleContainer">
        <div class="topTitle">
            <div class="container">
                <i class="el-icon-back" @click="logoutDP"></i>
                <span class="title">{{title}}</span>
                <div class="time">
                    <span>数据日期：</span>
                    <span>{{timeDate}}</span>
                </div>
                <div class="container2"></div>
            </div>
        </div>
        <EchartBtns2 v-if="isShowBtn"/>
    </div>
</template>
<script>
import EchartBtns2 from '@/components/echartBtns2'
export default {
    data(){
        return {
          timeDate:null,
          isShowBtn:false,
        }
    },
    props:{
      title:{
        type:String,
        required:true,
      }

    },
    components:{
      EchartBtns2
    },
    created(){
        if(this.$route.name == 'echarts2'){
            this.isShowBtn = true
        }else{
            this.isShowBtn = false
        }
    },
    mounted(){
      this.getDate()
    },
    methods:{
        getDate(){
            var date = new Date()
            const Y = date.getFullYear()
            const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
            const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
            const time = Y + '年' + M + '月' + D + '日'

            this.timeDate = time
        },

        logoutDP(){
            if(this.$route.path =='/echarts'){
                 this.$router.push({ path: '/home'})
            }else{
                 this.$router.push({ path: '/echarts'})
            }
           
        }
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';

.topTitleContainer{
    width:100%;
    height: 80px;
    position: relative;
    .topTitle{
        width:calc(100% - 40px);
        height: 60px;
        border-top: 40px solid #051d63;
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
        position: relative;
        .container{
            position: absolute;
            left: 50%;
            top:-34px;
            transform: translateX(-50%);
            width:calc(100% - 80px);
            border-top: 70px solid @border;
            border-right: 30px solid transparent;
            border-left: 30px solid transparent;
            text-align: center;
            .container2{
                position: absolute;
                bottom: -16px;
                left: 50%;
                transform: translateX(-50%);
                width:30%;
                border-top: 30px solid @border;
                border-right: 40px solid transparent;
                border-left: 40px solid transparent;
            }
            .title{
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            position: absolute;
            z-index: 100;
            left: 50%;
            transform: translateX(-50%);
            top:-50px;
            }
            .time{
            color: #fff;
            font-size: 20px;
            position: absolute;
            right: 10px;
            bottom: 50%;
            transform: translateY(-70%); 
            }
            .el-icon-back{
            color: #fff;
            font-size: 30px;
            position: absolute;
            left: 10px;
            bottom: 50%;
            transform: translateY(-70%); 
            cursor: pointer;
            }
        }
    
        
    }
}


</style>