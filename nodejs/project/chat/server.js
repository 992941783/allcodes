const webSocket = require('ws')
const express = require('express')
const path = require('path')
let app = express()
app.use('/',express.static(path.join(__dirname,'./static')))

let clients = [];
const ws = new webSocket.Server({port:8080},()=>{
    console.log('Ws ok')
})
ws.on('connection',(client)=>{
    clients.push(client);
    client.on('message',(msg)=>{
        console.log('来自客户端的数据:',msg)
        for(let i=0; i<clients.length; i++){
            if(client != clients[i]){
                clients[i].send(msg)
            }
        }
    }).on('close',(msg)=>{
        console.log('客户端断开连接')
    })
})
app.listen(3000,(req,res)=>{
    console.log('server ok')
})