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

  connect() {
    this.socket.connect();
  }

  sendMessage(message: string) {
    this.socket.emit('sendMessage', message);
  }
}

