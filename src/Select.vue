<template>
    <el-select
        v-model="value"
        filterable
        allow-create
        default-first-option
        placeholder="请选择文章标签">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
export default {
    name: "Select",
    data() {
        return {
            options: [{
                value: 'HTML',
                label: 'HTML'
            }, {
                value: 'CSS',
                label: 'CSS'
            }, {
                value: 'JavaScript',
                label: 'JavaScript'
            }],
            value: []
        }
    }
}
</script>

<style scoped>

</style>