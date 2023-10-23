// import { Component, OnInit } from '@angular/core';
// import { Socket } from 'ngx-socket-io';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent implements OnInit {

//   chat: { chats: any[] } = { chats: [] }; // Declarando chat como un objeto con la propiedad 'chats'

//   text: string = '';

//   constructor(private socket: Socket) {
//     this.socket.connect();
//   }

//   ngOnInit(): void {
//     // Lógica de inicialización si es necesaria
//   }

//   sendMessage() {
//     if (this.text) {
//       // Agrega la lógica para enviar el mensaje al servidor a través de sockets
//       this.socket.emit('chat message', this.text);
//       this.text = ''; // Limpia el campo de texto después de enviar el mensaje
//     }
//   }
// }
