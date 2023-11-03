
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

  sendMessage(messageText: string) {
    const messageInfo = {
      text: messageText,
      messageType: 2
    };


    this.socketService.sendMessage("sendMessage", messageInfo);
  }

  onReceiveMessage() {

    this.socketService.socket.on("receiveMessage", (messageInfo: { text: string; messageType: number; }) => {
      this.chats.push(messageInfo);
    });
  }
}
