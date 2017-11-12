module.exports = exports = (io) => {
  var _ = require('lodash');
  var bluetooth = require('../bluetooth/bluetooth')(io);
  var motor = require('../motor/motor')();
  var keyboard = require("../controls/motor-keyboard-controller")(motor);
  var sixaxxes = require("../controls/motor-sixaxxes-controller")(motor);

  var socket = null;
  let numClients = 0;
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
