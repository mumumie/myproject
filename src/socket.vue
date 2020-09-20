<template>
  <div>
    <div>
      <div>
        <p>在线用户：{{ userData.count }}</p>
        <p v-for="item in userData.list" :key="item[0]">用户Id: {{ item[0] }} 设备ID: {{ item[1] }}</p>
      </div>
      <ul>
        <li v-for="(item, index) in messageData" :key="index">{{item}}</li>
      </ul>
    </div>
    <el-input v-model="input" placeholder="消息..."/>
    <el-button type="primary" @click="send">发送</el-button>
    <el-input v-model="input1" placeholder="消息..."/>
    <el-button type="primary" @click="$socket.emit('connDeviceID', input1)">连接设备</el-button>
    <div>
      <el-input v-model="deviceMessage.deviceID" placeholder="设备ID"/>
      <el-input v-model="deviceMessage.name" placeholder="设备name"/>
      <el-button type="primary" @click="$socket.emit('deviceMessage', JSON.stringify(deviceMessage))">发送设备消息</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'socket',
        data() {
            return {
                messageData: [],
                userData: {
                    count: 0,
                    list: []
                },
                input: '',
                input1: '',
                deviceMessage: {
                    deviceID: '',
                    name: ''
                }
            }
        },
        mounted() {
            this.$socket.emit('connect', 1)
        },
        methods: {
            send() {
                this.$socket.emit('message', this.input)
            }
        },
        sockets: {// 通过vue实例对象sockets实现组件中的事件监听
            connect() {// socket的connect事件
                console.log('socket connected from Page')
            },
            // 监听链接数量
            users(data) {
                console.log('在线人数：' + data);
                this.userData.count = data
            },
            // 后端按主题名推送的消息数据
            receive_message(data) {
                console.log('接收数据：' + data)
            },
            // 设备推送的消息数据
            device_message(data) {
                console.log('接收数据：' + data)
                this.messageData.push(data)
            },
            // 重新连接
            reconnect(data) {
                console.log('重新链接' + data);
            },
            // 断开连接
            disconnect(data) {
                console.log('断开连接' + data);
            },
            // 用户列表
            userlist(data) {
                console.log('连接设备ID' + data);
                this.userData.list = JSON.parse(data)
            }
        },
    }
</script>

<style scoped>

</style>
