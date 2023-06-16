<template>
  <div id="example-1">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show:true
    }
  }
}
</script>
<style lang='less' scoped>
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter{
  transform: translateX(-10px);
  opacity: 0;
}
.slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>