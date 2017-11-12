module.exports = exports = (io, motor) => {
  var dualShock = require('dualshock-controller');

  var controller = dualShock(
    {
        //you can use a ds4 by uncommenting this line.
        //config: "dualshock4-generic-driver",
        //if using ds4 comment this line.
        config : "dualShock3",
        //smo;/ m                        oths the output from the acelerometers (moving averages) defaults to true
        accelerometerSmoothing : true,
        //smooths the output from the analog sticks (moving averages) defaults to false
        analogStickSmoothing : false
    });
    controller.on('error', err => console.log(err));
    controller.on('battery:change', data => console.log(data));
    controller.on('connection:change', data => console.log(data));
    controller.on('charging:change', data => console.log(data));
    controller.on('square:press', ()=> console.log('square press'));
    controller.on('square:release', () => console.log('square release'));
    controller.on('left:move', (data) => analogLeft(data));
    controller.on('right:move', (data) => analogRight(data));
    ///////////////
    function analogLeft(data){
      console.log('analog left release');
      console.log(data);
      console.log(motor);
      if(data.y){
        motor.forward(0, 255);
      }
      else{
        motor.stop(0);
      }
    }
    function analogRight(data){
      console.log('analog left release');
      console.log(data);
    }
    function connection(data){

    }
}
