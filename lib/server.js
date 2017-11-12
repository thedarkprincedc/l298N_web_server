console.log("ekdmnendjenjdnjed");
module.exports = exports = (port, openBrowser) => {
  require("constants");
  const express = require('express');
  const app = express();
  //const Router = require(__dirname + '/../routes/router');
  const socketlisteners = require(__dirname + '/socket/socket-listener');
  const opn = require('opn');

  app.use('/', express.static(__dirname + '/../dist'));

  const server = require('http').Server(app);
  const io = require('socket.io')(server);

  var serverInst = server.listen(port, () => {
    console.log('server running on port ' + port);
    socketlisteners(io);
  });

  if (openBrowser) opn('http://localhost:' + port);

  return serverInst;
}
