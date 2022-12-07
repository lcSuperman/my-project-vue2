<template>
    <div class="btns" @click="clickBtns">
       <button class="left-btn" :name="0" :class="{isActive: activeNum == '0' ? true : false}">全部</button>
       <button class="middle-btn" :name="1" :class="{isActive: activeNum == '1' ? true : false}">叉车</button>
       <button class="right-btn" :name="2" :class="{isActive: activeNum == '2' ? true : false}">高机</button>
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
    position: absolute;
    bottom: -18px;
    left:35px;
    button{
      border: 1px solid #0d41bb;
      background: rgba(3,24,60, 1);
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      height: 40px;
      width: 100px;
    }
    button:hover{
      color:#fff;
      border: 1px solid #0d41bb;
    }
    .isActive{
      color:#fff;
      border: 1px solid #0d41bb;
      background-color: #0d41bb;
    }
  }
   
</style>
