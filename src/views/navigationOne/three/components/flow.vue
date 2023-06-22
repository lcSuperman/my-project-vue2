<template>
    <div id="flowChart">
      <!-- 头部工具栏 -->
      <div class="operating">
        <div class="btn-group">
          <div class="btn" @click="addCircle" title="起始节点">
            <i class="iconfont icon-weixuanzhongyuanquan"></i>
          </div>
          <div class="btn" @click="addRect" title="常规节点">
            <i class="iconfont icon-gl-square"></i>
          </div>
          <div class="btn" @click="addRhombus" title="条件节点">
            <i class="iconfont icon-tubiao"></i>
          </div>
        </div>
        <div class="btn-group">
          <div class="btn" @click="addLine" title="直线">
            <i class="iconfont icon-line"></i>
          </div>
          <div class="btn" @click="addSmooth" title="曲线">
            <i class="iconfont icon-byangtiaoquxian"></i>
          </div>
          <div class="btn" @click="addArrowLine" title="箭头直线">
            <i class="iconfont icon-gl-arrowRd"></i>
          </div>
          <div class="btn" @click="addArrowSmooth" title="箭头曲线">
            <i class="iconfont icon-a-18"></i>
          </div>
        </div>
        <div class="btn-group">
          <div class="btn" @click="changeMode('edit')" title="选择模式">
            <i class="iconfont icon-xuanze"></i>
          </div>
          <div class="btn" @click="changeMode('drag')" title="拖拽模式">
            <i class="iconfont icon-tuozhuai"></i>
          </div>
        </div>
        <div class="btn-group">
          <div class="btn" @click="del" style="margin-top: 5px;" title="删除">
            <i class="el-icon-delete"></i>
          </div>
          <div class="btn" @click="save" title="保存">
            <i class="iconfont icon-baocun"></i>
          </div>
        </div>
        <div class="btn-group">
          <el-input size="mini" v-model="workflowName" placeholder="请输入流图名称..."></el-input>
        </div>
      </div>
      <!-- 右侧节点属性设置 -->
      <div class="info">
        <div class="title">
          <span>{{infoTitle}}属性</span>
        </div>
        <div class="content">
          <el-checkbox v-if="isBlank === true" v-model="checked">网格对齐</el-checkbox>
          <el-form v-else label-position="left" label-width="60px">
            <el-form-item v-if="isNode !== true" label="动作">
              <el-select v-model="action" size="mini" filterable placeholder="绑定动作" value="">
                <el-option
                  v-for="item in actionList"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>   <!-- 线-->
            <el-form-item v-if="isNode === true" label="名称">
              <el-input size="mini" v-model="name"></el-input>
            </el-form-item>
            <!-- <el-form-item v-if="isNode === true" label="类型">
              <el-select v-model="nodeType" size="mini" filterable placeholder="请选择类型" value="">
                <el-option
                  v-for="item in nodeTypeList"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item label="颜色">
              <el-color-picker v-model="color"></el-color-picker>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </template>
   
  <script>
   import G6 from '@antv/g6';
    export default {
      name: "index",
      components: {},
      mounted() {
        this.initG6();
      },
      props: {
        actionList: {
          type: Array, default: []
        },
        nodeTypeList: {
          type: Array, default: () => {
            return [
              {id: 0, label: '普通节点'},
              {id: 1, label: '入口节点'},
              {id: 2, label: '出口节点'}
            ]
          }
        }
      },
      data() {
        return {
          action: '',
          name: '',
          nodeType: 0,
          color: '',
          net: '',
          Util: '',
          workflowName: '',
          activation: '', //当前激活的节点
          isNode: false, //当前是节点
          isBlank: true,   //当前是空白区
          checked: true,  //网格对齐
          infoTitle: '画布',//属性标题
          oldColor: '',    //获取节点本身颜色
          type: '',        //有值为编辑状态
        }
      },
      methods: {
        //初始化
        initG6() {
          let self = this;
          self.Util = G6.Util;
          let grid;
          if (self.checked) {
            grid = {
              forceAlign: true, // 是否支持网格对齐
              cell: 25,         // 网格大小
            };
          } else {
            grid = null;
          }
          self.net = new G6.Net({
            id: 'flowChart',      // 容器ID
            mode: 'edit',
            grid: grid,
            /*width: 500,    // 画布宽*/
            height: 800    // 画布高
          });
   
          /**
           *点击空白处
           */
          self.net.on('click', (ev) => {
            if (!self.Util.isNull(ev.item)) {
              self.isBlank = false
            } else {
              self.isBlank = true;
              self.infoTitle = '画布'
            }
          });
          /**
           *点击节点
           */
          self.net.on('itemclick', function (ev) {
            self.isNode = self.Util.isNode(ev.item);   //是否为Node
            self.activation = ev.item;
            if (self.isNode) {
              /* 激活节点后节点名称input聚焦*/
              self.$nextTick(()=>{
                self.$refs.inputFocus.$el.querySelector('input').focus();
              });
              self.infoTitle = '节点';
              self.name = ev.item.get('model').label;
              self.nodeType = ev.item.get('model').nodeType;
            } else {
              self.infoTitle = '边';
              self.action = ev.item.get('model').action;
            }
            self.color = self.oldColor;
          });
          /**
           * 鼠标移入移出事件改变颜色
           */
          self.net.on('itemmouseenter', ev => {
            const item = ev.item;
            self.oldColor = item.get('model').color;     //获取节点颜色
            self.net.update(item, {
              color: '#108EE9',
            });
            self.net.refresh();
          });
          self.net.on('itemmouseleave', ev => {
            const item = ev.item;
            self.net.update(item, {
              color: self.oldColor
            });
            self.net.refresh();
          });
          /*self.net.source(self.nodes, self.edges);*/  //加载资源数据
          self.net.render();
        },
        //添加起始节点
        addCircle() {
          this.net.beginAdd('node', {
            shape: 'circle',
            nodeType: 0
          })
        },
        //添加常规节点
        addRect() {
          this.net.beginAdd('node', {
            shape: 'rect',
            nodeType: 0
          })
        },
        //添加条件节点
        addRhombus() {
          this.net.beginAdd('node', {
            shape: 'rhombus',
            nodeType: 0
          })
        }, 
        //添加直线
        addLine() {
          this.net.beginAdd('edge', {
            shape: 'line'
          });
        }, 
        //添加曲线
        addSmooth() {
          this.net.beginAdd('edge', {
            shape: 'smooth'
          })
        }, 
        //添加箭头曲线
        addArrowSmooth() {
          this.net.beginAdd('edge', {
            shape: 'smoothArrow'
          })
        }, 
        //添加箭头直线
        addArrowLine() {
          this.net.beginAdd('edge', {
            shape: 'arrow'
          });
        }, 
        //添加折线
        addPolyLine() {
          this.net.beginAdd('edge', {
            shape: 'polyLineFlow'
          });
        }, 
        //拖拽与编辑模式的切换
        changeMode(mode) {
          this.net.changeMode(mode)
        }, 
        //删除节点
        del() {
          this.net.del()
        },
        //保存流程图
        save() {
          /* 验证流图名称*/
          if (this.workflowName !== '') {
            let data = this.net.save();
            if (data.source.nodes.length === 0) {
              this.$message({type: 'error', message: '流图内容不能为空'});
              return false
            }
            /* 验证节点名称*/
            for (let item of data.source.nodes) {
              if (item.label === '' || item.label === null || item.label === undefined) {
                this.$message({type: 'error', message: '节点名称不能为空'});
                return false
              }
            }
            data.source['name'] = this.workflowName;
            /*let json = JSON.stringify(data, null, 2);*/
            this.$emit('saveData', data.source, this.type);
          } else {
            this.$message({type: 'error', message: '流图名称不能为空'})
          }
          /*console.log(saveData, json);*/
        },
        //更新节点
        update() {
          if (this.activation.get('type') === 'node') {
            this.net.update(this.activation, {
              label: this.name,
              nodeType: this.nodeType,
              color: this.color
            });
          } else {
            /* 根据ID取出label*/
            let label = this.actionList.map(item => {
              if (item.id === this.action) {
                return item.label
              }
            }).join('');
            this.net.update(this.activation, {
              label: label,
              color: this.color,
              action: this.action
            });
          }
        },
        //清空视图，重置画布
        clearView() {
          this.type = '';
          this.workflowName = '';
          this.net.changeData()
        },
        //渲染流程数据
        source(nodes, edges, name, type) {
          this.type = type;
          this.workflowName = name;
          this.net.changeData(nodes, edges)
        },  
      },
      watch: {
        /**
         * 监听输入框
         */
        action: function () {
          this.update()
        },
        name: function () {
          this.update()
        },
        nodeType: function () {
          this.update()
        },
        color: function () {
          this.update()
        },
        /**
         * 网格切换
         */
        checked: function () {
          let _saveData = this.net.save();
          this.net.destroy();  //销毁画布
          this.initG6();
          this.net.read(_saveData);
          this.net.render()
        }
      }
    }
  </script>
   
  <style  lang="less" scoped>
    #flowChart {
      border: 1px solid #cdcdcd;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      width: 80%;
      box-sizing: border-box;
      height: 100%;
    }
   
    .operating {
      position: absolute;
      z-index: 99;
      background-color: #ffffff;
      padding: 20px 10px;
      box-shadow: 1px 1px 4px 0 #0a0a0a2e;
    }
   
    .info {
      position: absolute;
      height: 100%;
      right: 0;
      z-index: 99;
      box-shadow: 1px 1px 4px 0 #0a0a0a2e;
      .title {
        height: 40px;
        padding-left: 10px;
        border-top: 1px solid #DCE3E8;
        border-bottom: 1px solid #DCE3E8;
        border-left: 1px solid #DCE3E8;
        background: rgb(235, 238, 242);
        line-height: 40px;
        span {
          font-size: 14px;
        }
      }
      .content {
        background: rgba(247, 249, 251, 0.45);
        width: 220px;
        height: 800px;
        border-left: 1px solid #E6E9ED;
        padding: 10px;
      }
    }
   
    .btn-group {
      border-right: 1px solid #efefef;
      display: inline-block;
      padding-left: 10px;
      padding-right: 14px;
      &:last-of-type {
        border-right: 0;
      }
      .btn {
        display: inline-block;
        margin: 2px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        border: 1px solid rgba(233, 233, 233, 0);
        i {
          font-size: 20px;
        }
        &:hover {
          border: 1px solid #E9E9E9;
          color: #767A85;
          border-radius: 2px;
          background: #FAFAFE;
        }
      }
      .el-form-item {
        margin-bottom: 0 !important;
      }
    }
  </style>