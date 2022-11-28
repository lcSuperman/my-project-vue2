<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    
  },
  beforeDestroy(){
      
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
.el-select-dropdown{
  border: none;
}
.el-scrollbar__wrap{
    background:rgba(3, 25, 62, .9);
}
.el-select-dropdown__item{
  color: #fff; 
}
.el-select-dropdown__item.hover{
  background:#2ba7b1;
}
.el-select-dropdown__item.selected{
  color:#b08d54 ;
}
::-webkit-scrollbar {
  height: 10px;
  width: 15px;
  overflow-y: auto;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(89, 89, 89, 0.2);
    background: #d5d5d5;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: 0;
    border-radius: 0;
    background: #f4f5f6;
}
</style>
