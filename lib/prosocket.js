const Websocket = require('ws');
const {appKey,secretKey, deviceId} = require('../credentials');
const client = new Websocket("ws://ws.sinric.pro",{
headers:{
    appkey: appKey,
    deviceids: deviceId
}
});

module.exports = client;