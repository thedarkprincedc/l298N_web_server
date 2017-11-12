module.exports = exports = (io, pollInterval) => {
  var blue = require("bluetoothctl");
  var POLL_INTERVAL = pollInterval || 20000;

  var hasBluetooth = blue.checkBluetoothController();
  console.log('system has bluetooth controller:' + hasBluetooth);
  blue.on(blue.bluetoothEvents.Device, onDeviceEvent);
  blue.on(blue.bluetoothEvents.Controller, onControllerEvent);
  blue.on(blue.bluetoothEvents.DeviceSignalLevel, onDeviceSignalLevelEvent);
  /////////////////
  function onDeviceSignalLevelEvent(devices, mac, signal){
    // console.log('signal level of:' + mac + ' - ' + signal)
    io.emit(BLUETOOTH_EVENTS.SIGNAL, {
      mac: mac,
      signal: signal
    });
  }
  function onDeviceEvent(devices){
    //  console.log('devices:' + JSON.stringify(devices,null,2))
    io.emit(BLUETOOTH_EVENTS.DEVICE_LIST, devices);
  }
  function onControllerEvent(controllers){
    //console.log('Controllers:' + JSON.stringify(controllers,null,2))
    io.emit(BLUETOOTH_EVENTS.CONTROLLER, controllers);
  }

  function pair(mac){
    blue.pair(mac);
  }

  function unpair(mac){
    blue.disconnect(mac);
  }

  function scan(){
    if(hasBluetooth) {
      console.log('isBluetooth Ready:' + blue.isBluetoothReady)
      blue.scan(true)
      setTimeout(function(){
          console.log('stopping scan')
          blue.scan(false)
          //blue.info('00:0C:8A:8C:D3:71')
      },20000);
    }
  }
}
