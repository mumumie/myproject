<template>
    <dragTreeTable :data="treeData" :onDrag="onTreeDataChange"></dragTreeTable>
</template>

<script>
    import dragTreeTable from "drag-tree-table";

    export default {
        name: "dragTree",
        data() {
            return {
                treeData: {
                    columns: [
                        {
                            type: 'selection',
                            title: '菜单名称',
                            field: 'name',
                            width: 200,
                            align: 'center',
                            formatter: (item) => {
                                return '<a>'+item.name+'</a>'
                            }
                        },
                        {
                            type: 'checkbox',
                            isContainChildren: true, //是否勾选子节点，默认false
                            onChange: this.onCheck, // parmas selectRows
                            title: '链接',
                            field: 'url',
                            width: 200,
                            align: 'center'
                        },
                        {
                            title: '操作',
                            type: 'action',
                            width: 350,
                            align: 'center',
                            actions: [
                                {
                                    text: '查看',
                                    onclick: (item) => {
                                        // item是当前行的数据
                                        console.log('查看',item)
                                    },
                                    formatter: (item) => {
                                        return '<i>查看</i>'
                                    }
                                },
                                {
                                    text: '角色',
                                    onclick: (item) => {
                                        // item是当前行的数据
                                        console.log('角色',item)
                                    },
                                    formatter: (item) => {
                                        return '<i>角色</i>'
                                    }
                                },
                                {
                                    text: '编辑',
                                    onclick: (item) => {
                                        // item是当前行的数据
                                        console.log('编辑',item)
                                    },
                                    formatter: (item) => {
                                        return '<i>编辑</i>'
                                    }
                                }
                            ]
                        },
                    ],
                    lists: [
                        {
                            "id":40,
                            "parent_id":0,
                            "order":0,
                            "name":"动物类",
                            "uri":"/masd/ds",
                            "open":true,
                            "lists":[]
                        },{
                            "id":5,
                            "parent_id":0,
                            "order":1,
                            "name":"昆虫类",
                            "uri":"/masd/ds",
                            "open":true,
                            "isShowCheckbox": false, //'如果设置了type=checkbox,但是想控制某些行不显示CheckBox，可以用此属性'
                            "lists":[
                                {
                                    "id":12,
                                    "parent_id":5,
                                    "open":true,
                                    "order":0,
                                    "name":"蚂蚁",
                                    "uri":"/masd/ds",
                                    "lists":[]
                                }
                            ]
                        },
                        {
                            "id":19,
                            "parent_id":0,
                            "order":2,
                            "name":"植物类",
                            "uri":"/masd/ds",
                            "open":true,
                            "lists":[]
                        }
                    ],
                    custom_field: {
                        id: 'id',
                        order: 'sort',
                        lists: 'children',
                        parent_id: 'parent_id'
                    }
                }
            };
        },
        components: {
            dragTreeTable
        },
        methods: {
            onTreeDataChange(list) {
                console.log(list);
                this.treeData.lists = list;
            },
            onCheck(row){
                console.log('是否勾选', row);
            }
        }
    };
</script>