import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  text: string = '';
  chat: any;

  constructor(private socketService: SocketService) {
    this.chat = {
      chats: []
    };
  }

  ngOnInit() {
    const userToken = localStorage.getItem('token'); // Obtén el token del usuario autenticado
    if (userToken) {
      this.socketService.connectWithToken(userToken); // Conecta el chat con el token
    }
  }

  sendMessage() {
    if (this.text) {
      this.socketService.sendMessage("sendMessage", this.text);
      this.chat.chats.push({
        text: this.text,
        messageType: 1
      });
      this.text = '';
    }
  }
}
