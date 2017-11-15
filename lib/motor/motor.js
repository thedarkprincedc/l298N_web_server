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
  // _.each(this.pins, (value) => {
  //   _.each(value, (value, index) => {
  //     if (index == "pwm") {
  //       console.log("\npwm >" + value)
  //       rpio.pwmSetClockDivider(8);
  //       rpio.open(value, rpio.PWM);
  //       rpio.pwmSetRange(value, 1027);
  //       rpio.pwmSetData(value, 70);
  //     } else {
  //       console.log("\ndigital >" + value)
  //       rpio.open(value, rpio.OUTPUT, rpio.LOW);
  //     }
  //   });
  // });
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
  rpio.pwmSetClockDivider(8);
  rpio.open(data.number, rpio.PWM);
  rpio.pwmSetRange(data.number, 1027);
  rpio.pwmSetData(data.number, 70);
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
