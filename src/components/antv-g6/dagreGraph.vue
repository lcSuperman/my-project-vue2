<template>
 <div id="container"></div>
</template>
<script>
import G6 from '@antv/g6';
import { getDagreData} from '@/api' //获取mock的接口函数
export default {
    data(){
        return{
          data:{}
        }
    },
    mounted(){
       this.initDagre()
    },
    methods:{
        initDagre(){
            //自定义节点类型样式
            G6.registerNode(
            'sql',
            {
                drawShape(cfg, group) {
                    const rect = group.addShape('rect', {
                        attrs: {
                        x: -75,
                        y: -25,
                        width: 150,
                        height: 50,
                        radius: 10,
                        stroke: '#5B8FF9',
                        fill: '#C6E5FF',
                        lineWidth: 3,
                        },
                        name: 'rect-shape',
                    });
                    if (cfg.name) {
                        group.addShape('text', {
                            attrs: {
                                text: cfg.name,
                                x: 0,
                                y: 0,
                                fill: '#00287E',
                                fontSize: 18,
                                textAlign: 'center',
                                textBaseline: 'middle',
                                fontWeight: 'bold',
                            },
                            name: 'text-shape',
                        });
                    }
                    return rect;
                },
            },
            'single-node',
            );

            const container = document.getElementById('container');
            const width = container.scrollWidth;
            const height = container.scrollHeight || 500;
            const graph = new G6.Graph({
                container: 'container',
                width,
                height,
                fitView: true, //设置是否将图适配到画布中
                fitViewPadding: [10, 40, 10, 40],//画布上四周的留白宽度
                layout: {
                    type: 'dagre',
                    rankdir:'LR',
                    nodesepFunc: (d) => {
                    if (d.id === '3') {
                        return 80;
                    }
                    return 50;
                    },
                    ranksep: 50,
                    controlPoints: true,
                },
                defaultNode: {
                   type:'sql'
                },
                defaultEdge: {
                    type: 'polyline',
                    style: {
                    radius: 20,
                    offset: 45,
                    endArrow: true,
                    lineWidth: 2,
                    stroke: '#C2C8D5',
                    },
                },
                nodeStateStyles: {
                    selected: {
                        stroke: '#d9d9d9',
                        fill: '#5394ef',
                    },
                },
                modes: {
                    default: [
                    'drag-canvas',
                    'zoom-canvas',
                    'click-select',
                    ],
                },
                fitView: true,
            });
            getDagreData().then(res => {
                if(res.status == 200){
                    const result = res.data
                    this.data = result
                    graph.data(this.data);
                    graph.render();
                    
                }
            })
           

            if (typeof window !== 'undefined')
            window.onresize = () => {
                if (!graph || graph.get('destroyed')) return;
                if (!container || !container.scrollWidth || !container.scrollHeight) return;
                graph.changeSize(container.scrollWidth, container.scrollHeight);
            };

        }
    }
}
</script>
<style lang='less'>
#container{
    margin-top: 10px;
    width: 100%;
    height: 100%;
    background-color: rgb(248, 248, 248);
}
</style>