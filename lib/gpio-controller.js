module.exports = exports = (io, orb) => {
    var _ = require('lodash');
    var rpio = require('rpio');
    var pins = [{
            a: 27,
            b: 28,
            pwm: 29
        },{
            a: 27,
            b: 28,
            pwm: 29
        }];
    function init(){
        _.each(pins, (value) => {
            _.each(value, (value, index) => {
                if(index == "pwm"){
                    rpio.open(value, rpio.PWM);
                }
                else{
                    rpio.open(value, rpio.OUTPUT, rpio.LOW);
                }
            });
        });
    }
    function forward(){
        rpio.write(12, rpio.HIGH);
        rpio.write(12, rpio.HIGH);

        rpio.write(12, rpio.HIGH);
        rpio.write(12, rpio.HIGH);
    }
    function backwards(){
        rpio.write(12, rpio.HIGH);
        rpio.write(12, rpio.HIGH);

        rpio.write(12, rpio.HIGH);
        rpio.write(12, rpio.HIGH);

    }
    function turnRight(){

    }
    function turnLeft(){

    }
}
