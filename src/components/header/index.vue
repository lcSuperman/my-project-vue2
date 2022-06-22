<template>
    <div class="header">
      <div class="left">
          <i @click="collapse" class="iconfont icon-Shankar"></i>
      </div>
      <div class="right">
        <el-button size="small" @click="handleLogout">退出</el-button>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           isCollapse:false
        }

    },

    methods:{
        collapse(){
            this.isCollapse = !this.isCollapse
            this.$bus.$emit('isCollapse',this.isCollapse)
        },
        handleLogout(){
          setTimeout(() => {
             this.$router.push({ path: '/login'})
             sessionStorage.setItem('activeMenu',null)
             this.$message({
                message: '已成功退出忍者世界！',
                type: 'success',
                duration:1000
             }) 
          },500) 
        }
    }
}
</script>
<style lang='less' scoped>
.header{
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .left{
       height:100%;
       width: 60%;
       display:flex;
       align-items: center;
       .icon-Shankar{
          cursor: pointer;
       }
    }
 }
</style>