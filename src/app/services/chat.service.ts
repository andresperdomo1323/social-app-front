import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats: { text: string; messageType: number; }[] = [];

  constructor(private socketService: SocketService) {
    this.onReceiveMessage();
  }

  sendMessage(messageInfo: { text: string; messageType: number; }) {
    messageInfo.messageType = 2;
    this.chats.push(messageInfo);
    this.socketService.sendMessage("sendMessage", messageInfo); // Utiliza el método sendMessage
  }
  onReceiveMessage() {
    this.socketService.socket.on("receiveMessage", (messageInfo: { text: string; messageType: number; }) => {
      this.chats.push(messageInfo);
    });
  }
}
