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

::-webkit-scrollbar {
  height: 5px;
  width: 10px;
  overflow-y: auto;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(89, 89, 89, 0.2);
    background:#b08d54;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: 0;
    border-radius: 0;
    background:rgba(255, 255, 255, 0);;
}
</style>
