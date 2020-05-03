<template>
  <div>
    <!-- 操作按钮 -->
    <el-button @click="initUI">代码版本，差异对比</el-button>

    <!-- 代码版本，差异对比 对话框内容 -->
      <div id="view"></div>

  </div>
</template>

<script>
    import CodeMirror from 'codemirror'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/addon/merge/merge.js'
    import 'codemirror/addon/merge/merge.css'
    import DiffMatchPatch from 'diff-match-patch'
    window.diff_match_patch = DiffMatchPatch
    window.DIFF_DELETE = -1
    window.DIFF_INSERT = 1
    window.DIFF_EQUAL = 0


export default {
    name: "CodeMirror",
    data() {
        return {
            // 内部真实的内容
            value: '#!/bin/bash\n' +
                'cd /root/\n' +
                'list=(`ls`)\n' +
                ' \n' +
                'for i in ${list[@]}\n' +
                'do\n' +
                '   if [ -d $i ]\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '   then\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '       cp -r $i /tmp/\n' +
                '   fi\n' +
                'done'+'#!/bin/bash555555555555555555555555555555555555555555555555555555555555555555555555\n' +
                    'cd /root/\n' +
                'list=(`ls`)\n' +
                ' \n' +
                'for i in ${list[@]}\n' +
                'do\n' +
                '   if [ -d $i ]\n' +
                '   then\n' +
                '       cp -r $i /tmp/\n' +
                '   fi\n' +
                'done',
            orig2: '#!/bin/bash\n' +
                'cd /root/\n' +
                'list=(`ls`)\n' +
                ' \n' +
                '\n' +
                'do\n' +
                '   if [ -d $i ]\n' +
                '   then\n' +
                '       cp -r $i /tmp/\n' +
                '   fi\n' +
                'done',
            openBBB:false
        }
    },
    methods:{
        initUI() {
            this.openBBB = true
            let target = document.getElementById("view");
            target.innerHTML = "";
            CodeMirror.MergeView(target, {
                value: this.value,//上次内容
                orig: this.orig2,//本次内容
                origLeft:null,
                lineNumbers: true,//显示行号
                mode: "text/html",
                highlightDifferences: true,
                styleActiveLine: true,
                matchBrackets: true,
                connect: null,
                collapseIdentical: false,
                readOnly: true,  //只读 不可修改
                revertButtons:false //事件比较替换
            });

        }

    }
};
</script>

<style >
    .CodeMirror-merge-r-chunk+.CodeMirror-gutter-wrapper+.CodeMirror-line {
        background-color: yellow;
    }
    .CodeMirror-merge-r-chunk+.CodeMirror-gutter-wrapper+.CodeMirror-line span {
        background-image: none;
    }
    .CodeMirror-merge, .CodeMirror-merge .CodeMirror{
        height:600px;
    }
</style>