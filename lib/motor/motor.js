var motor = {};
var _ = require('lodash');
var rpio = require('rpio');
rpio.init({
  gpiomem: false,
  /* Use /dev/gpiomem */
  mapping: 'physical',
  /* Use the P1-P40 numbering scheme */
  mock: undefined,
  /* Emulate specific hardware in mock mode */
})

var fs = require('fs');
motor.onInit = function (filename) {
  if (this.pins = this.loadJson(filename)) {

  }
  this.initPins(this.pins);
}
motor.loadJson = function (filename) {
  var configOptions = JSON.parse(fs.readFileSync(filename, 'utf8'));
  if (configOptions.motors != undefined) {
    configOptions = configOptions.motors;
  }
  return configOptions;
}
motor.initPins = function (pins) {
  var pMotor = this;
  _.each(this.pins, (value) => {
    _.each(value, (value) => {
      if (value.type == "DIGITAL") {
        pMotor.setDigital(value);
      }
      if (value.type == "PWM") {
        pMotor.setPWMPin(value);
      }
    }
  );
  });
}
motor.setDigital = function (data) {
  rpio.open(data.number, rpio.OUTPUT, rpio.LOW);
}
motor.setPWMPin = function (data) {
  debugger;
  rpio.open(data.number, rpio.PWM);
  rpio.pwmSetClockDivider(1920);
  rpio.pwmSetRange(pin, 200);
  rpio.pwmSetData(pin, 1);
}
motor.forward = function (bank, speed) {
  rpio.write(this.pins[bank].a.number, rpio.HIGH);
  rpio.write(this.pins[bank].b.number, rpio.HIGH);

  //rpio.pwmSetClockDivider(64);
  console.log(this.pins[bank]);
}
motor.reverse = function (bank, speed) {
  rpio.write(this.pins[bank].a.number, rpio.HIGH);
  rpio.write(this.pins[bank].b.number, rpio.LOW);
}
motor.stop = function (bank, speed) {
  rpio.write(this.pins[bank].a.number, rpio.HIGH);
  rpio.write(this.pins[bank].b.number, rpio.HIGH);
}
module.exports = motor;
