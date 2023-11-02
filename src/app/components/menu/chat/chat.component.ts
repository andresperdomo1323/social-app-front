// import { Component } from '@angular/core';
// // import { SocketService } from 'src/app/services/socket.service';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent {
//   text: string = '';
//   chat: any;

//   constructor(private socketService: SocketService) {
//     this.socketService.connect();
//     this.chat = {
//       chats: []
//     };
//   }

//   sendMessage() {
//     if (this.text) {
//       this.socketService.sendMessage(this.text);
//       this.chat.chats.push({
//         text: this.text,
//         messageType: 1
//       });
//       this.text = '';
//     }
//   }
// }
