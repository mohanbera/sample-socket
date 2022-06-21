let socket;
addListening();

function addListening() {
    socket = io("ws://localhost:8080");
    socket.on("mytopic", (text) => {
    console.log("text is => ", text);
  });
}

let bool = true;
function stopListening() {
  if (bool) {
    socket.disconnect();
    console.log('stoping socket');
  } else {
    console.log('starting socket');
    addListening();
  }
  bool = !bool;
}

function testFun(data) {
  console.log("test complete", data);
}
