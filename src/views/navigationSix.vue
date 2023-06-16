<template>
    <div class="graph">
       <!-- <div class="graphContainer">
          <h3>antv-G6 关系图</h3>
          <ForceGraph></ForceGraph>  
       </div>
       <div class="graphContainer">
          <h3>antv-G6 流程图</h3>
          <DagreGraph></DagreGraph>
       </div> -->
       
    </div>
   
</template>
<script>
import ForceGraph from '@/components/antv-g6/forceGraph'
import DagreGraph from '@/components/antv-g6/dagreGraph'
export default {
   components:{
       ForceGraph,
       DagreGraph
   }
}
</script>
<style lang='less'>
  .graph{
     display: flex;
     justify-content: space-between;     
     .graphContainer{
         width: 49%;
         height: 700px;
     }

  }

</style>