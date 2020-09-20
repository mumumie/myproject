// 引入必须模棱
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

// 在线人数统计
var onlineCount = 0;
var userList = new Map();
var deviceMap = new Map();


// 当有用户连接进来时
io.on('connection', function(socket) {
    // console.log(socket);
    console.log(socket.handshake.headers.origin);
    console.log(socket.id);
    console.log('a user connected');
    let deviceCurrent = ''
    // 发送给客户端在线人数
    io.emit('users', ++onlineCount);
    userList.set(socket.id, 'not')
    const list = [...userList]
    io.emit('userlist', JSON.stringify(list))

    // 连接deviceID
    socket.on('connDeviceID', function(deviceID) {
        console.log(deviceID);
        if (deviceMap.has(deviceCurrent)) {
            deviceMap.delete(deviceCurrent)
            deviceMap.set(deviceID, socket.id)
        } else {
            deviceMap.set(deviceID, socket.id)
        }
        deviceCurrent = deviceID
        userList.set(socket.id, deviceCurrent)
        const list = [...userList]
        io.emit('userlist', JSON.stringify(list))
    })

    // 当有用户断开
    socket.on('disconnect', function() {
        console.log('user disconnected');
        // 发送给客户端人数
        userList.delete(socket.id)
        deviceMap.delete(deviceCurrent);
        io.emit('users', --onlineCount);
        console.log(onlineCount);
    });

    // 收到了客户端发来的消息
    socket.on('message', function(message){
        // 给客户端发送消息
        console.log('服务器收到的消息为：', message);
        io.emit('receive_message', message);
    });
    // 收到了设备端发来的消息
    socket.on('deviceMessage', function(data){
        // 给客户端发送消息
        console.log('服务器收到的消息为：', data);
        const message = JSON.parse(data)
        if (deviceMap.has(message.deviceID)) {
            // io.sockets.socket(message.deviceID).emit('device_message', message.name)
            console.log(message.name);
            console.log(deviceMap.get(message.deviceID));
            socket.to(deviceMap.get(message.deviceID)).emit('device_message', message.name);
        }
    });
});

var server = http.listen(4000,function(){
    console.log('Server is running 4000');
});
