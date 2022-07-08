<template>  
    <div id="mountNode"></div>
</template>
<script>
import G6 from '@antv/g6';
import { getGraphData} from '@/api' //获取mock的接口函数
export default {
    data(){
        return{
            initData:{}
        }
    },
    
    mounted(){
        console.log(G6.Global.version)
        // this.initGraph()
        this.initRemoteData()
    },
    methods:{
        //基础练习
        initGraph(){
            const initData = {
                // 点集
                nodes: [
                {
                    id: 'node1', // 节点的唯一标识
                    x: 100, // 节点横坐标
                    y: 100, // 节点纵坐标
                    label: '起始点', // 节点文本
                },
                {
                    id: 'node2',
                    x: 400,
                    y: 100,
                    label: '目标点',
                },
                ],
                // 边集
                edges: [
                // 表示一条从 node1 节点连接到 node2 节点的边
                {
                    source: 'node1', // 起始点 id
                    target: 'node2', // 目标点 id
                    label: '我是连线', // 边的文本
                },
                ],
            };
            //图实例化
            const graph = new G6.Graph({
                container: 'mountNode', // 指定挂载容器
                width: 800, // 图的宽度
                height: 500, // 图的高度
            });
          
            graph.data(initData); // 加载数据
            graph.render(); // 渲染
        },
        //远程获取接口数据
        initRemoteData(){
            const container = document.getElementById('mountNode');
            const width = container.scrollWidth;
            const height = container.scrollHeight || 500;
            getGraphData().then(res => {
                if(res.status == 200){
                   const result = res.data
                   result.nodes.forEach((node) => {
                        if (!node.style) {
                            node.style = {};
                        }
                        switch (node.class) {// 根据节点数据中的 class 属性配置图形
                            case 'c0': {
                            node.type = 'circle'; // class = 'c0' 时节点图形为 circle
                            break;
                            }
                            case 'c1': {
                            node.type = 'rect'; // class = 'c1' 时节点图形为 rect
                            node.size = [35, 20]; // class = 'c1' 时节点大小
                            break;
                            }
                            case 'c2': {
                            node.type = 'ellipse'; // class = 'c2' 时节点图形为 ellipse
                            node.size = [35, 20]; // class = 'c2' 时节点大小
                            break;
                            }
                        }
                    });
                   result.edges.forEach((edge) => {
                        if (!edge.style) {
                            edge.style = {};
                        }
                        edge.style.lineWidth = edge.weight; // 边的粗细映射边数据中的 weight 属性数值
                        //动态配置属性会覆盖全局配置属性,解决办法是将被覆盖的边的样式都移到动态配置里面来,移到此处
                        edge.style.opacity = 0.6;
                        edge.style.stroke = 'grey';
                    });
                   this.initData = result
                  
                }
                // 实例化 minimap 插件 在大数据量下可能会造成双倍的绘制效率成本
                const minimap = new G6.Minimap({
                    size: [100, 100],
                    className: 'minimap',
                    type: 'delegate',
                });
                // 实例化 Grid 插件
                const grid = new G6.Grid();
                
                //图实例化
                const graph = new G6.Graph({
                    container: 'mountNode', // 指定挂载容器
                    width: width, // 图的宽度
                    height: height, // 图的高度
                    //fitView: true, //设置是否将图适配到画布中
                    //fitViewPadding: [20, 40, 50, 20],//画布上四周的留白宽度
                    //节点在默认状态下的样式配置（style）和其他配置
                    layout: {
                        // Object，可选，布局的方法及其配置项，默认为 random 布局。
                        type: 'force', // 指定为力导向布局
                        preventOverlap: true, // 防止节点重叠
                        linkDistance: 150, // 指定边距离为100
                        // nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
                    },
                    modes: {
                        default: ['drag-canvas', 'zoom-canvas', 'drag-node',
                        {
                            type: 'tooltip', // 提示框
                            formatText(model) {
                            // 提示框文本内容
                            const text = 'label: ' + model.label + '<br/> class: ' + model.class;
                            return text;
                            },
                        },
                        {
                            type: 'edge-tooltip',
                            formatText(model) {
                                const text = 'source: ' + model.source
                                + '<br/> target: ' + model.target
                                + '<br/> weight: ' + model.weight;
                                return text;
                            },
                            shouldUpdate: e => {
                              return true;
                            }
                        }
                        ], // 允许拖拽画布、放缩画布、拖拽节点
                    },
                    // 节点不同状态下的样式集合
                    nodeStateStyles: {
                        // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
                        hover: {
                        fill: 'lightsteelblue',
                        },
                        // 鼠标点击节点，即 click 状态为 true 时的样式
                        click: {
                        stroke: '#000',
                        lineWidth: 3,
                        },
                    },
                    // 边不同状态下的样式集合
                    edgeStateStyles: {
                        // 鼠标点击边，即 click 状态为 true 时的样式
                        click: {
                        stroke: 'steelblue',
                        },
                    },
                    plugins: [grid], // 将 minimap 实例配置到图上
                    defaultNode: {
                        size: 30, // 节点大小
                        // ...                 // 节点的其他配置
                        // 节点样式配置
                        // style: {
                        //   fill: 'steelblue', // 节点填充色
                        //   stroke: '#666', // 节点描边色
                        //   lineWidth: 1, // 节点描边粗细
                        // },
                        // 节点上的标签文本配置
                        labelCfg: {
                        // 节点上的标签文本样式配置
                          style: {
                             fill: '#000', // 节点标签文字颜色
                          },
                        },
                    },
                    // 边在默认状态下的样式配置（style）和其他配置
                    defaultEdge: {
                        // ...                 // 边的其他配置
                        // 边样式配置
                        // style: {
                        //   opacity: 0.6, // 边透明度
                        //   stroke: 'grey', // 边描边颜色
                        // },
                        // 边上的标签文本配置
                        labelCfg: {
                          autoRotate: true, // 边上的标签文本根据边的方向旋转
                        },
                    },
                    animate: true, // Boolean，可选，全局变化时否使用动画过渡
                });
                // 鼠标进入节点
                graph.on('node:mouseenter', (e) => {
                    const nodeItem = e.item; // 获取鼠标进入的节点元素对象
                    graph.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
                });

                // 鼠标离开节点
                graph.on('node:mouseleave', (e) => {
                    const nodeItem = e.item; // 获取鼠标离开的节点元素对象
                    graph.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
                });

                // 点击节点
                graph.on('node:click', (e) => {
                    // 先将所有当前是 click 状态的节点置为非 click 状态
                    const clickNodes = graph.findAllByState('node', 'click');
                    clickNodes.forEach((cn) => {
                        graph.setItemState(cn, 'click', false);
                    });
                    const nodeItem = e.item; // 获取被点击的节点元素对象
                    graph.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
                });

                // 点击边
                graph.on('edge:click', (e) => {
                    // 先将所有当前是 click 状态的边置为非 click 状态
                    const clickEdges = graph.findAllByState('edge', 'click');
                    clickEdges.forEach((ce) => {
                        graph.setItemState(ce, 'click', false);
                    });
                    const edgeItem = e.item; // 获取被点击的边元素对象
                    graph.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
                });

                graph.data(this.initData); // 加载数据
                graph.render(); // 渲染

            })
        },
    }
}

</script>
<style lang='less'>
    #mountNode{
        margin-top: 10px;
        width: 100%;
        height: 100%;
        background-color: rgb(248, 248, 248);
        
    }
    /* 提示框的样式 */
    .g6-tooltip {
        border: 1px solid #e2e2e2;
        border-radius: 4px;
        font-size: 12px;
        color: #545454;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 10px 8px;
        box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    }


</style>