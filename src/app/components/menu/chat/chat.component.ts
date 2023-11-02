import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  text: string = '';
  chat: any;

  constructor(private chatService: ChatService) {
    this.chat = {
      chats: []
    };
  }

  ngOnInit() {

  }

  sendMessage() {
    if (this.text) {
      this.chatService.sendMessage(this.text);
      this.chat.chats.push({
        text: this.text,
        messageType: 1
      });
      this.text = '';
    }
  }
}
