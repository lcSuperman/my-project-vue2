<template>
    <div class="btns" @click="clickBtns">
       <button class="left-btn" name="0" :class="{isActive: activeNum == '0' ? true : false}">全部</button>
       <button class="middle-btn" name="1" :class="{isActive: activeNum == '1' ? true : false}">融资性</button>
       <button class="right-btn" name="2" :class="{isActive: activeNum == '2' ? true : false}">经营性</button>
    </div>

</template>
<script>
export default {
    data(){
        return{
          activeNum:0,
        }
    },
    methods:{
     clickBtns(e){
       console.log(e.target.name)
       this.activeNum = e.target.name
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
