module.exports = exports = (io) => {
    var speed = 0;
    
    io.on('connection', (socket) => {
    
    });      
    socket.on('error', (err) => console.log(err));
    socket.on('keyboard', (err) => {
        console.log("rwfjrwnfwnfiwenfjin");
    });
    socket.on('bluetooth', (err) => {
        console.log("rwfjrwnfwnfiwenfjin");
    });
}