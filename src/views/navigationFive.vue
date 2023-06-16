<template>
  <div class="tinymce">
      <div class="tinymceLeft">
        <tinymce-editor ref="editor" @input="jieshou"></tinymce-editor>
    </div>
    <div class="tinymceRight" v-html="htmlContent"></div>
  </div>
  
</template>

<script>
import TinymceEditor from '../components/tinymce-editor.vue'
export default {
  components: {
    TinymceEditor
  },
  data() {
    return {
      htmlContent:''
    }
  },

  methods:{
      jieshou(value){
       this.htmlContent = value
      }
  }
}
</script>
<style lang='less' scoped>
.tinymce{
    display: flex;
    justify-content: space-between;
    .tinymceLeft{
        width: 70%;
        height: 100%;
        /deep/.tinymce-editor{
          height: 100%;
          .tox{
            height: 100% !important;
          }
        }
        
    }
    .tinymceRight{
      border: 1px solid rgb(201, 201, 201);
      width: 29%;
      max-height: 100%;
    }
}
</style>