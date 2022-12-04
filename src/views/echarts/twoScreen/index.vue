<template>
    <div class="children-contents">
       
     <!-- swiper -->
      <swiper :options="swiperOptionA">
        <swiper-slide>
          <swiper :options="swiperOptionB">
            <swiper-slide><Main /></swiper-slide>
            <swiper-slide><Main2 /></swiper-slide>
            <swiper-slide><Main3/></swiper-slide>
            <div class="swiper-pagination swiper-pagination-b" slot="pagination"></div>
          </swiper>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-a" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import Main from './main'
import Main2 from './main2'
import Main3 from './main3'
export default {
  
   data() {
     return {
        swiperOptionA: {
            spaceBetween: 50,
            // pagination: {
            //  el: '.swiper-pagination-a',
            //  clickable: true
            // }
        },
        swiperOptionB: {
            direction: 'vertical',
            spaceBetween: 50,
            // pagination: {
            //  el: '.swiper-pagination-b',
            //  clickable: true
            // }
        },
      }
    },
    components:{
        Main,
        Main2,
        Main3
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
 .children-contents{
    height: 100%;
    width:100%;
    background: linear-gradient(#02152f,#051e52); 
    .swiper-container{
        width: 100%;
        height: 100%;
        .swiper-wrapper{
            width: 100%;
            height: 100%;
            .swiper-slide{
                color: #fff;
                width: 100%;
                height: 100%;
            }
        }
    }
    
 }
</style>