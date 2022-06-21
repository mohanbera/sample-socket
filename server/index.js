
const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: {origin: '*'}
});

let bool = true;
io.on('connection', (socket) => {
    if(bool) {
        sendMessage(io);
    }
    bool = false;
});

let count = 0;
function sendMessage(io) {
    setInterval(()=> {
        io.emit('mytopic', count++);
        console.log(count);
    }, 2000);
}

http.listen(8080, function() {
    console.log('Listening on port 8080');
});