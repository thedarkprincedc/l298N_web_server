//var self = module.exports = {};

var blue = require("bluetoothctl");
var events = require("./bluetooth-events");

// exports.bluetooth = function(io, pollInterval) {
//   this.io = io;
//   this.pollInterval = pollInterval || 20000;
//   this.blue.Bluetooth();
//   this.hasBluetooth = this.blue.checkBluetoothController();

//   this.blue.on(this.blue.bluetoothEvents.Device, (device) => onDeviceEvent(device) );
//   this.blue.on(this.blue.bluetoothEvents.Controller, (controllers) => onControllerEvent(controllers));
//   this.blue.on(this.blue.bluetoothEvents.DeviceSignalLevel, (devices, mac, signal) => onDeviceSignalLevelEvent(devices, mac, signal));
// }
function bluetooth(io, pollInterval){
  this.io = io;
  this.pollInterval = pollInterval || 20000;
console.log("--------------");
console.log(blue);
}
bluetooth.prototype.controllerlist = [];
bluetooth.prototype.devicelist = [];
bluetooth.prototype.onDeviceSignalLevelEvent = function(devices, mac, signal){

}
bluetooth.prototype.onDeviceEvent = function(devices) {

}
bluetooth.prototype.onDeviceEvent = function(controllers) {

}
bluetooth.prototype.scan = function(mac) {

}
bluetooth.prototype.unpair = function(mac) {

}
bluetooth.prototype.scan = function () {

}
module.exports = bluetooth;
// module.exports = exports = (io, pollInterval) => {
//   var blue = require("bluetoothctl");
//   var BLUETOOTH_EVENTS = require("./bluetooth-events");
//   blue.Bluetooth();
//   var POLL_INTERVAL = pollInterval || 20000;

//   var hasBluetooth = blue.checkBluetoothController();
//   console.log('system has bluetooth controller:' + hasBluetooth);
//   console.log(blue.bluetoothEvents);
//   var controllerlist = [];
//   var devicelist = [];
//   blue.on(blue.bluetoothEvents.Device, (device) => onDeviceEvent(device) );
//   blue.on(blue.bluetoothEvents.Controller, (controllers) => onControllerEvent(controllers));
//   blue.on(blue.bluetoothEvents.DeviceSignalLevel, (devices, mac, signal) => onDeviceSignalLevelEvent(devices, mac, signal));

//   /////////////////
//   function onDeviceSignalLevelEvent(devices, mac, signal) {
//     console.log('signal level of:' + mac + ' - ' + signal)
//     // io.emit(BLUETOOTH_EVENTS.SIGNAL, {
//     //   mac: mac,
//     //   signal: signal
//     // });
//   }

//   function onDeviceEvent(devices) {
//     controllerlist = devices;
//     //console.log('devices:' + JSON.stringify(devices,null,2))
//     //io.emit(BLUETOOTH_EVENTS.DEVICE_LIST, devices);
//   }

//   function onControllerEvent(controllers) {
//     controllerlist = controllers;
//     //console.log('Controllers:' + JSON.stringify(controllers,null,2))
//     //io.emit(BLUETOOTH_EVENTS.CONTROLLER, controllers);
//   }

//   function pair(mac) {
//     blue.pair(mac);
//   }

//   function unpair(mac) {
//     blue.disconnect(mac);
//   }

//   this.scan = function () {
//     if (hasBluetooth) {
//       console.log('isBluetooth Ready:' + blue.isBluetoothReady)
//       blue.scan(true);
//       setTimeout(function () {
//         console.log('stopping scan')
//         blue.scan(false);
//         //blue.info('00:0C:8A:8C:D3:71')
//       }, 20000);
//     }
//   }
//   return {
//     controllerlist: controllerlist,
//     devicelist: devicelist
//   }
// }
