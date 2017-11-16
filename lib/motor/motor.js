var motor = {};
var _ = require('lodash');
var rpio = require('rpio');
rpio.init({
  gpiomem: false,
  /* Use /dev/gpiomem */
  mapping: 'gpio',
  /* Use the P1-P40 numbering scheme */
  mock: undefined,
  /* Emulate specific hardware in mock mode */
})

var fs = require('fs');
motor.onInit = function (filename) {
  if (this.pins = this.loadJson(filename)) {

  }
  this.pinfunc = {
    DIGITAL: motor.setDigital,
    PWM: motor.setPWMPin
  };
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
  _.each(this.pins, (value) => {
    _.each(value, (value) => {
      var motorf = null;
      if ((motorf = this.pinfunc[value.type]) != undefined) {
        motorf(value);
      }

      // if (value.type == "DIGITAL") {
      //   pMotor.setDigital(value);
      // }
      // if (value.type == "PWM") {
      //   pMotor.setPWMPin(value);
      // }

    });
  });
}
motor.setDigital = function (data) {
  rpio.open(data.number, rpio.OUTPUT, rpio.LOW);
}
motor.setPWMPin = function (data) {
  debugger;
  rpio.open(data.number, rpio.PWM);
  rpio.pwmSetClockDivider(1024);
  rpio.pwmSetRange(data.number, 200);
  rpio.pwmSetData(data.number, 1);
}
motor.forward = function (bank, speed) {
  rpio.write(this.pins[bank].a.number, rpio.HIGH);
  rpio.write(this.pins[bank].b.number, rpio.LOW);

  //rpio.pwmSetClockDivider(64);
  console.log(this.pins[bank]);
}
motor.reverse = function (bank, speed) {
  rpio.write(this.pins[bank].a.number, rpio.LOW);
  rpio.write(this.pins[bank].b.number, rpio.HIGH);
}
motor.stop = function (bank, speed) {
  rpio.write(this.pins[bank].a.number, rpio.LOW);
  rpio.write(this.pins[bank].b.number, rpio.LOW);
}
module.exports = motor;
