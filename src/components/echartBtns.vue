<template>
    <div class="btns" @click="clickBtns">
       <button class="left-btn" :name="btns.all" :class="{isActive: activeNum == btns.all ? true : false}">全部</button>
       <button class="middle-btn" :name="btns.finance" :class="{isActive: activeNum == btns.finance ? true : false}">融资性</button>
       <button class="right-btn" :name="btns.manage" :class="{isActive: activeNum == btns.manage ? true : false}">经营性</button>
    </div>

</template>
<script>
export default {
    data(){
        return{
          activeNum:this.btns.all,
        }
    },
    props:{
       btns:Object,
    },
    mounted(){
      
    },
    methods:{
     clickBtns(e){
       var value = e.target.name
       this.activeNum = value
       this.$bus.$emit('clickThreeBtns', value)
    
     }
   }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
  .btns{
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
      border: 1px solid @border;
      background: rgba(0,0,0, 0);
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      height: 33px;
    }
    .left-btn{
      border-radius:10px 0 0 10px;
    }
    .right-btn{
      border-radius:0 10px 10px 0;
    }
    button:hover{
      color: @hover;
      border: 1px solid @hover;
    }
    .isActive{
      color: @hover;
      border: 1px solid @hover;
    }
  }
   
</style>
