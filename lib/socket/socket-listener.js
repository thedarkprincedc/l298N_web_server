module.exports = exports = (io) => {
  "use strict";
  var _ = require('lodash');
  var bluetooth = require('../bluetooth/bluetooth')(io);
  var motor = require('../motor/motor')();
  motor.onInit(__dirname + "/../config.json");
  var keyboard = require("../controls/keyboard-controller")(motor);
  var sixaxxes = require("../controls/sixaxxes-controller")(motor);

  var socket = null;
  var numClients = 0;
  io.on('connection', (socket) => {
    socket.on('error', (err) => console.log(err));
    socket.on('keyboard', (data) => keyboard.onKeyboard(data));
    socket.on('disconnect', () => disconnect() );
  });
  function disconnect(){
    console.log('number sockets', --numClients)
    if(numClients == 0){
        //clearInterval(bluetoothInterval);
        bluetoothInterval =null;
    }
  }
}
