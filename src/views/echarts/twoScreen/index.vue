<template>
    <div class="children-contents">
       
     <!-- swiper -->
      <swiper :options="swiperOptionA">
        <swiper-slide>
          <swiper :options="swiperOptionB">
             <swiper-slide><Main /></swiper-slide>
            <swiper-slide><Main2 /></swiper-slide>
            <swiper-slide><Main3/></swiper-slide>
             <swiper-slide><Main4/></swiper-slide>
             <swiper-slide><Main5/></swiper-slide>
            <swiper-slide><Main6/></swiper-slide>
            <!-- <div class="swiper-pagination swiper-pagination-b" slot="pagination"></div> -->
          </swiper>
        </swiper-slide>
        <!-- <div class="swiper-pagination swiper-pagination-a" slot="pagination"></div> -->
      </swiper>
    </div>
</template>
<script>
import Main from './main'
import Main2 from './main2'
import Main3 from './main3'
import Main4 from './main4'
import Main5 from './main5'
import Main6 from './main6'
export default {
  
   data() {
     return {
        swiperOptionA: {
            spaceBetween: 50,
            touchStartPreventDefault:false,
            // pagination: {
            //  el: '.swiper-pagination-a',
            //  clickable: true
            // }
        },
        swiperOptionB: {
            direction: 'vertical',
            touchStartPreventDefault:false,
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
        Main3,
        Main4,
        Main5,
        Main6
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
 .children-contents{
    height: 100%;
    width:100%;
    background: linear-gradient(#02152f,#051e52); 
    //  background-color:#fff ; 
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