module.exports = exports = (io) => {
    var _ = require('lodash');
    var bluetooth = require('bluetooth');
    var moto
    // var speed = 0;
    // var bluetoothDefault = [{
    //     name: "PS3 Gamepad",
    //     deviceid: "00:33:23:44",
    //     connected: true
    //   },{
    //     name: "Unknown Device",
    //     deviceid: "00:33:23:66",
    //     connected: false
    //   }]
    /**/
    //clearTimeout(connInterval)
    var socket = null;
    let numClients = 0;
    // let bluetoothInterval = null;

    io.on('connection', (socket) => {
        socket.on('error', (err) => console.log(err));
        socket.on('keyboard', (data) => onKeyboardControls(data));
        socket.on('bluetooth', (data) => {

        });
        // socket.on('bluetooth', (data) => {
        //     if(data.msg == 'disconnect' && data.deviceid){
        //         onDisconnectBlutooth(data.deviceid);
        //     }
        //     if(data.msg == 'pair' && data.deviceid){
        //         onPairBluetooth(data.deviceid);
        //     }
        //     socket.broadcast.emit("bluetooth", bluetoothDefault);
        // });
        // socket.emit("bluetooth", bluetoothDefault);
        // socket.on('disconnect', () => {
        //     console.log('number sockets', --numClients)
        //     if(numClients == 0){
        //         clearInterval(bluetoothInterval);
        //         bluetoothInterval =null;
        //     }
        // });
        // console.log('number sockets', ++numClients)
        // if(numClients > 0 && !bluetoothInterval){
        //     bluetoothInterval = setInterval( () => {
        //       // console.log("bluetooth update");
        //     }, 2000);
        // }
    });

    /**/

    // function onKeyboardControls(data){
    //     console.log("rwfjrwnfwnfiwenfjin");
    // }
    // function onPairBluetooth(deviceId){
    //     console.log("Pair Bluetooth #" + deviceId);
    //     _.map(bluetoothDefault, item => {
    //         if(item.deviceid == deviceId){
    //             item.connected = true;
    //         }
    //         //console.log(item);
    //     });

    // }
    // function onDisconnectBlutooth(deviceId){
    //     console.log("Disconnect Bluetooth #" + deviceId);
    //     _.map(bluetoothDefault, item => {
    //         if(item.deviceid == deviceId){
    //             item.connected = false;
    //         }
    //         //console.log(item);
    //     });

    // }
}
