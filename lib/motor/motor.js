module.exports = exports = () => {
  var _ = require('lodash');
  var rpio = require('rpio');
  var fs = require('fs');
  var pins = [];

  function onInit(filename) {
    pins = loadJson(filename);
    initPins(pins);
  }

  function loadJson(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
  }

  function initPins(pins) {
    _.each(pins, (value) => {
      _.each(value, (value, index) => {
        if (index == "pwm") {
          //rpio.open(value, rpio.PWM);
        } else {
          rpio.open(value, rpio.OUTPUT, rpio.LOW);
        }
      });
    });
  }
  function forward(bank, speed){
    rpio.write(pins[bank].a, rpio.HIGH);
    rpio.write(pins[bank].b, rpio.HIGH);
  }
  function backwards(bank, speed){
    rpio.write(pins[bank].a, rpio.HIGH);
    rpio.write(pins[bank].b, rpio.LOW);
  }
  function stop(bank, speed){
    rpio.write(pins[bank].a, rpio.HIGH);
    rpio.write(pins[bank].b, rpio.HIGH);
  }

  return {
    onInit: onInit,
    getMotorCtrls: getMotorCtrls,
    forward: forward,
    backwards: backwards,
    stop: stop
  }
}
