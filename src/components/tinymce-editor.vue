<template>
 <div class="tinymce-editor">
     <editor v-model="myValue" :init="init" @onClick="onClick" placeholder="请输入要写的内容"></editor>
 </div>
</template>
<script>
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import "tinymce/themes/silver";
import 'tinymce/icons/default/icons'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/paste'

export default {
    components:{
       Editor
    },
    data(){
        return{
            //初始化配置
            init:{
                menubar: false, // 菜单栏显隐
                language_url: '../../static/tinymce/langs/zh_CN.js',
                language: 'zh_CN',
                skin_url: '../../static/tinymce/skins/ui/oxide',
                height: 550,
                max_height: 800,
                toolbar_mode: "wrap",
                plugins: 'link lists image code table wordcount paste',
                toolbar:  'bold italic underline strikethrough | formatselect | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
                content_style: "p {margin: 5px 0;}",
                fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
                font_formats:
                "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",
                branding: false,
                // 图片上传
                images_upload_handler: (blobInfo, success, failure) => {
                    const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                    success(img)
                }
            },
            myValue:''
        }
    },
    mounted() {
     tinymce.init({});
    },
    methods: {
       //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
       //需要什么事件可以自己增加
        onClick(e) {
        //    this.$emit('onClick', e, tinymce)
        },
    },
    watch: {
        myValue(newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>
<style lang='less' scoped>

</style>