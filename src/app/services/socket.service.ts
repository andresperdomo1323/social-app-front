import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: Socket;

  constructor(private socketIO: Socket) {
    this.socket = socketIO;
  }

  connectWithToken(token: string) {
    // Configura los encabezados para incluir el token de autenticación
    const headers = { Authorization: `Bearer ${token}` };

    // Crea una nueva instancia de Socket con los encabezados configurados
    this.socket = new Socket({
      url: this.socket.ioSocket._uri,
      options: { extraHeaders: headers }
    });

    // Conecta el nuevo socket
    this.socket.connect();
  }

  sendMessage(event: string, message: any) {
    this.socket.emit(event, message);
  }
}
