var motor = {};
var _ = require('lodash');
var rpio = require('rpio');
rpio.init({
  gpiomem: false,          /* Use /dev/gpiomem */
  mapping: 'physical',    /* Use the P1-P40 numbering scheme */
  mock: undefined,        /* Emulate specific hardware in mock mode */
})

var fs = require('fs');
motor.onInit = function (filename) {
  this.pins = this.loadJson(filename);
  this.initPins(this.pins);
}
motor.loadJson = function (filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
motor.initPins = function (pins) {
  _.each(this.pins, (value) => {
    _.each(value, (value, index) => {
      if (index == "pwm") {
        console.log("\npwm >" +value)
        rpio.pwmSetClockDivider(8);
        rpio.pwmSetRange(value, 1027);
        rpio.pwmSetData(value, 70);
        rpio.open(value, rpio.PWM);
      } else {
        console.log("\ndigital >" +value)
        rpio.open(value, rpio.OUTPUT, rpio.LOW);
      }
    });
  });
}
motor.forward = function (bank, speed) {
  rpio.write(this.pins[bank].a, rpio.HIGH);
  rpio.write(this.pins[bank].b, rpio.HIGH);
  rpio.pwmSetClockDivider(64);
  console.log(this.pins[bank]);
}
motor.reverse = function (bank, speed) {
  rpio.write(this.pins[bank].a, rpio.HIGH);
  rpio.write(this.pins[bank].b, rpio.LOW);
}
motor.stop = function (bank, speed) {
  rpio.write(this.pins[bank].a, rpio.HIGH);
  rpio.write(this.pins[bank].b, rpio.HIGH);
}
module.exports = motor;

// module.exports = exports = () => {
//   var _ = require('lodash');
//   var rpio = require('rpio');
//   var fs = require('fs');

//   function motor() {
//     this.pins = [];
//   }
//   motor.prototype.onInit = function (filename) {
//     this.pins = this.loadJson(filename);
//     this.initPins(this.pins);
//   }
//   motor.prototype.loadJson = function (filename) {
//     return JSON.parse(fs.readFileSync(filename, 'utf8'));
//   }
//   motor.prototype.initPins = function (pins) {
//     _.each(this.pins, (value) => {
//       _.each(value, (value, index) => {
//         if (index == "pwm") {
//           //rpio.open(value, rpio.PWM);
//         } else {
//           rpio.open(value, rpio.OUTPUT, rpio.LOW);
//         }
//       });
//     });
//   }
//   motor.prototype.forward = function (bank, speed) {
//     rpio.write(this.pins[bank].a, rpio.HIGH);
//     rpio.write(this.pins[bank].b, rpio.HIGH);
//   }
//   motor.prototype.reverse = function (bank, speed) {
//     rpio.write(this.pins[bank].a, rpio.HIGH);
//     rpio.write(this.pins[bank].b, rpio.LOW);
//   }
//   motor.prototype.stop = function (bank, speed) {
//     rpio.write(this.pins[bank].a, rpio.HIGH);
//     rpio.write(this.pins[bank].b, rpio.HIGH);
//   }
//   return new motor();
// }
