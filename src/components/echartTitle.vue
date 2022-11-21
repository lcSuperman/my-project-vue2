<template>
  <div class="echart-title">
    <div class="left-title">
       <div class="line"></div>
       <span>{{title}}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
   
    props:{
      title:{
        type: String,
        required: true
      }
    },
  
   
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
.echart-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-title{
       font-size: 16px;
       display:flex;
       align-items: center;
       color: #fff;
       font-weight: bold;
      .line{
        width: 6px;
        height: 20px;
        margin-right: 10px;
        background-color: #2cedfe;
      }
    }
    .btns{
       display: flex;
       justify-content: space-between;
       align-items: center;
      button{
        border: 1px solid @border;
        background: rgba(0,0,0, 0);
        color: #fff;
        font-size: 18px;
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
   
}
</style>