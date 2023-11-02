// import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';

// @Injectable({
//   providedIn: 'root'
// })
// export class SocketService {
//   socket: Socket;

//   constructor(private socketIO: Socket) {
//     this.socket = socketIO;
//   }

//   connectWithToken(token: string) {
//     // Configurar los encabezados para incluir el token de autenticación
//     const headers = {
//       Authorization: `Bearer ${token}`
//     };

//     // Conectar al servidor de chat con los encabezados configurados
//     // this.socket.connect({ transportOptions: { polling: { extraHeaders: headers } });
//   }

//   sendMessage(message: string) {
//     this.socket.emit('sendMessage', message);
//   }
// }
