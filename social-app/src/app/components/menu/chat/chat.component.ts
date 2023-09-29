import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  nuevoMensaje: string = "";
  mensajes: any = [
    {
      emisor: "id",
      texto: "hola"
    },
    {
      emisor: "id",
      texto: "¿cómo estas?"
    },
    {
      emisor: "id",
      texto: "Bien y tú?"
    },
    {
      emisor: "id",
      texto: "¿qué haces?"
    },
    {
      emisor: "id",
      texto: "nada"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  enviarMensaje() {
    console.log(this.nuevoMensaje);

    this.nuevoMensaje = "";
  }


}
