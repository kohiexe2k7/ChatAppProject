// Import modules
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

// Keeps track of users and connections
var users = [];
var connections = [];

// Starts server
server.listen(3000, function() {
  console.log('Server running on port 3000');
});

// Serve static files from the current directory
app.use(express.static(__dirname));

// route for localhost:3000/
app.get("/", function (req, resp) { 
resp.sendFile(__dirname + "/index.html");
});

app.get("/chat.html", function (req, resp) {
  // route for localhost:3000/chat.html
  resp.sendFile(__dirname + "/chat.html");
});

io.sockets.on("connection", function (socket) {
  // When client connects to the server
  connections.push(socket);
  console.log("Connected: %s sockets connected", connections.length); // current connections

  socket.on("disconnect", function (data) {
    // When client disconnects from the server
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected: %s sockets connected", connections.length); // current connections
  });

  socket.on("send message", function (data) {
    console.log(data);
    io.sockets.emit("new message", { user: data.user, msg: data.msg });
  });
});

console.log("Server running on port 3000");