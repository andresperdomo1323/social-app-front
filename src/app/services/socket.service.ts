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
    const headers = { Authorization: `Bearer ${token}` };
    this.socket.ioSocket.io.opts.transportOptions = {
      polling: { extraHeaders: headers }
    };
    this.socket.connect();
  }

  sendMessage(event: string, message: any) {
    this.socket.emit(event, message);
  }
}
