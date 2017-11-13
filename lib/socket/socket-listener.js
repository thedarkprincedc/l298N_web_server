module.exports = exports = (io) => {
  "use strict";
  var _ = require('lodash');
  var bluetooth = require('../bluetooth/bluetooth');
  console.log(bluetooth);

  var motor = require('../motor/motor');
  motor.onInit(__dirname + "/../config.json");

  var keyboard = require("../controls/keyboard-controller")(motor);
  var sixaxxes = require("../controls/sixaxxes-controller")(io, motor);

  var socket = null;
  var numClients = 0;
  io.on('connection', (socket) => {
    connect();
    //bluetooth.scan();
    io.emit("ON_CONNECTED", {
      bluetooth: {
        controller: bluetooth.controllerlist || [],
        devices: bluetooth.devicelist || []
      }
    });
    // socket.on('error', (err) => console.log(err));
    // socket.on('keyboard', (data) => keyboard.onKeyboard(data));
    // socket.on('disconnect', () => disconnect() );
  });
  function connect(){
    numClients++;
  }
  function disconnect(){
    console.log('number sockets', --numClients)
    if(numClients == 0){
        //clearInterval(bluetoothInterval);
        //bluetoothInterval =null;
    }
  }
}
