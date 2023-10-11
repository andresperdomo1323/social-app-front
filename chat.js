const app = require('expres')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: true,
    credentials: true,
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado');

  socket.on("sendMessage", (messageInfo) => {
    console.log("Enviando un mensaje");
    socket.broadcast.emit("receiveMessage", messageInfo);
  });
});
