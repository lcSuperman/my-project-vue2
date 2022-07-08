<template>
    <div class="directive">
        <div class="one">
            <div class="container">
                <h3>v-debounce（防抖）自定义指令</h3>
                 <span class="describe">防抖：触发事件后，在n秒内，再次点击触发事件，重新计时，n秒后事件开始响应</span>
                <div class="debounce">
                   <span>当前n为：<b>{{n}}</b></span><br/>
                   <el-button :style="{marginTop:'10px',width:'100px'}" type="primary" plain size="mini" v-debounce ="click" >点击3秒后+</el-button>
                   <el-button :style="{marginTop:'10px',width:'60px'}" type="primary" plain size="mini" @click="n = 0">还原</el-button>
                </div>
            </div>
             <div class="container">
                 <h3>v-throttling（节流）自定义指令</h3>
                 <span class="describe">节流：触发事件后，在n秒内，无论点击多少次，只响应一次事件</span>
                <div class="debounce">
                   <span>当前m为：<b>{{m}}</b></span><br/>
                   <el-button :style="{marginTop:'10px',width:'100px'}" type="primary" plain size="mini" v-throttling ="click1" >3秒内点击+</el-button>
                   <el-button :style="{marginTop:'10px',width:'60px'}" type="primary" plain size="mini" @click="m = 0">还原</el-button>
                </div>
                
            </div>
        </div>
        
 
    </div>
</template>
<script>
export default {
    data(){
        return{
            n:0,
            m:0,
        }
    },
    directives:{
        debounce:{
            inserted(el,binding){
                let timer
                el.addEventListener('click', () =>{
                     timer && clearTimeout(timer)
                     timer = setTimeout(() => {
                         binding.value()
                     },3000)
                })
            }
        },
        throttling:{
            inserted(el,binding){
                let timer = null;
                el.addEventListener('click', () => {
                    if(!timer){
                         timer = setTimeout(() => {
                            binding.value();
                            clearTimeout(timer);
                            timer = null
                        }, 3000);
                    }
                   
                });
            }

        }
       
    },
    watch:{
    },
    methods:{
        click(){
            this.n++
        },
        click1(){
            this.m++
        }
    }
}
</script>
<style lang='less' scoped>
.directive{
    .one{
        display: flex;
        justify-content: space-between;
        .container{
            height: 130px;
            width: 48%;
            padding: 10px 10px;
            background-color: rgb(246, 246, 246);
            .describe{
                font-size: 12px;
            }
            .debounce{
                padding-top: 20px;
            }
        }
    }
}
</style>