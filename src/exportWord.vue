<template>
    <div>
        <button @click="exportWord">导出</button>
    </div>
</template>

<script>
    import Docxtemplater from 'docxtemplater'
    import PizZip from 'pizzip'
    import JSZipUtils from 'jszip-utils'
    import { saveAs } from 'file-saver'
    export default {
        data() {
            return {
                lookDetail: {
                    name:'李四',
                    order_date:'2020-02-26',
                    list: [
                        {course: '数学', score: 80},
                        {course: '语文', score: 55},
                        {course: '英语', score: 60},
                        {course: '物理', score: 70},
                        {course: '化学', score: 80},
                        {course: '生物', score: 100}
                    ]
                },
                wordData: {
                    name: '导出word',
                    nameList: [{
                        name: "张三",
                        age: 16,
                        hobby: ['吃饭', '睡觉', '打豆豆']
                    },
                        {
                            name: "李四",
                            age: 19,
                            hobby: ['抽烟', '喝酒', '打麻将']
                        },
                    ]
                },
            }
        },
        methods: {
            // 点击导出word
            exportWord() {
                const that = this
                // 读取并获得模板文件的二进制内容
                JSZipUtils.getBinaryContent('word.docx', function(error, content) {
                    // gy-agree-service.docx是模板。我们在导出的时候，会根据此模板来导出对应的数据
                    // 抛出异常
                    if (error) {
                        throw error
                    }
                    console.log(content)
                    // 创建一个PizZip实例，内容为模板的内容
                    const zip = new PizZip(content)
                    // 创建并加载docxtemplater实例对象
                    const doc = new Docxtemplater().loadZip(zip)
                    // 设置模板变量的值
                    doc.setData({
                        name: that.lookDetail.name,
                        order_date: that.lookDetail.order_date,
                        list: that.lookDetail.list
                    })
                    try {
                        // 用模板变量的值替换所有模板变量
                        doc.render()
                    } catch (error) {
                        // 抛出异常
                        const e = {
                            message: error.message,
                            name: error.name,
                            stack: error.stack,
                            properties: error.properties
                        }
                        console.log(JSON.stringify({ error: e }))
                        throw error
                    }

                    // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
                    const out = doc.getZip().generate({
                        type: 'blob',
                        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    })
                    // 将目标文件对象保存为目标类型的文件，并命名
                    saveAs(out, '同意书.docx')
                })
            }
        }
    }

</script>

<style scoped>
</style>