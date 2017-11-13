module.exports = exports = (io, pollInterval) => {
  var blue = require("bluetoothctl");
  var BLUETOOTH_EVENTS = require("./bluetooth-events");
  blue.Bluetooth();
  var POLL_INTERVAL = pollInterval || 20000;

  var hasBluetooth = blue.checkBluetoothController();
  console.log('system has bluetooth controller:' + hasBluetooth);
  console.log(blue.bluetoothEvents);
  this.controllerlist = [];
  this.devicelist = [];
blue.on(blue.bluetoothEvents.Device, (device) => onDeviceEvent (device));
  blue.on(blue.bluetoothEvents.Controller, onControllerEvent);
  blue.on(blue.bluetoothEvents.DeviceSignalLevel, (devices, mac, signal) => onDeviceSignalLevelEvent(devices, mac, signal));

  /////////////////
  function onDeviceSignalLevelEvent(devices, mac, signal){
    console.log('signal level of:' + mac + ' - ' + signal)
    // io.emit(BLUETOOTH_EVENTS.SIGNAL, {
    //   mac: mac,
    //   signal: signal
    // });
  }
  function onDeviceEvent(devices){
    this.controllerlist = devices;
    //console.log('devices:' + JSON.stringify(devices,null,2))
    //io.emit(BLUETOOTH_EVENTS.DEVICE_LIST, devices);
  }
  function onControllerEvent(controllers){
    this.controllerlist = controllers;
    //console.log('Controllers:' + JSON.stringify(controllers,null,2))
    //io.emit(BLUETOOTH_EVENTS.CONTROLLER, controllers);
  }

  function pair(mac){
    blue.pair(mac);
  }

  function unpair(mac){
    blue.disconnect(mac);
  }

  this.scan = function(){
    if(hasBluetooth) {
      console.log('isBluetooth Ready:' + blue.isBluetoothReady)
      blue.scan(true);
      setTimeout(function(){
          console.log('stopping scan')
          blue.scan(false);
          //blue.info('00:0C:8A:8C:D3:71')
      },20000);
    }
  }
}
