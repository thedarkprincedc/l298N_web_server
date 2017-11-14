module.exports = exports = (io) => {
  "use strict";
  var _ = require('lodash');
  var blue = require("bluetoothctl");
  blue.Bluetooth();
  var bluetooth = require('../bluetooth/bluetooth')(io, blue);
  var BLUETOOTH_EVENTS = require("../bluetooth/bluetooth-events");
  var motor = require('../motor/motor');
  motor.onInit(__dirname + "/../config.json");
  var keyboard = require("../controls/keyboard-controller")(motor);
  var sixaxxes = require("../controls/sixaxxes-controller")(io, motor);
  var bluetoothData = {
    controller:  [],
    devices:  []
  }
  blue.on(blue.bluetoothEvents.Device, (device) => onDeviceEvent(device) );
  blue.on(blue.bluetoothEvents.Controller, (controllers) => onControllerEvent(controllers));
  blue.on(blue.bluetoothEvents.DeviceSignalLevel, (devices, mac, signal) => onDeviceSignalLevelEvent(devices, mac, signal));

  var socket = null;
  var numClients = 0;
  io.on('connection', (socket) => {
    connect();
    //bluetooth.scan();
    io.emit("ON_CONNECTED", bluetoothData);
    socket.on('bluetooth', (data) => bluetoothPageEvent(data));
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

function bluetoothPageEvent(data){
console.log("--");
console.log(data);
  // io.emit("ON_CONNECTED", bluetoothData);

}
  function onDeviceEvent(device){
    io.emit(BLUETOOTH_EVENTS.DEVICE_LIST, device);
    bluetoothData.devices = device;
  }

  function onControllerEvent(controllers){
    io.emit(BLUETOOTH_EVENTS.CONTROLLER, controllers);
    bluetoothData.controller = controllers;
  }

  function onDeviceSignalLevelEvent(devices, mac, signal){
    bluetoothData.signal = {
      devices: devices,
      mac: mac,
      signal: signal
    };
  }
}
