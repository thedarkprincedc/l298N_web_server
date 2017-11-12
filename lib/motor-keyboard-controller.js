module.exports = exports = (motor) => {
  function onKeyboard(data){
    if(data.forward){
      if(data.left){
        motor.forward(0, 45);
        motor.forward(1, 100);
      }
      if(data.right){
        motor.forward(1, 100);
        motor.forward(1, 45);
        return;
      }
      motor.forward(1, 100);
      motor.forward(1, 100);
      return;
    }
    if(data.reverse){
      if(data.left){
        motor.reverse(0, 100);
        motor.reverse(1, 45);
        return;
      }
      if(data.right){
        motor.reverse(0, 100);
        motor.reverse(1, 45);
        return;
      }
      motor.reverse(0, 100);
      motor.reverse(1, 100);
      return;
    }
    motor.stop(0);
    motor.stop(1);
  }
}

// {
//   control: keyboard,
//   left: 0
//   right: 0
//   forward: 0
//   reverse: 0
// }
