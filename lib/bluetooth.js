module.exports = exports = (pollInterval) => {
  var blue = require("bluetoothctl");
  var POLL_INTERVAL = pollInterval || 20000;
  function pair(){

  }
  function unpair(){

  }
  var hasBluetooth = blue.checkBluetoothController();
  console.log('system has bluetooth controller:' + hasBluetooth);

  if(hasBluetooth) {
    console.log('isBluetooth Ready:' + blue.isBluetoothReady)
    blue.scan(true)
    setTimeout(function(){
        console.log('stopping scan')
        blue.scan(false)
        //blue.info('00:0C:8A:8C:D3:71')
    },20000)
  }
}
