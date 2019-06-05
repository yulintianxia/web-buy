import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'app/websocket.service';

@Component({
  selector: 'app-websock',
  templateUrl: './websock.component.html',
  styleUrls: ['./websock.component.css']
})
export class WebsockComponent implements OnInit {

  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
    // this.wsService.createObservableSocket('ws://localhost:8085')
    // .subscribe(
    //    data => console.log(data),
    //    err => console.log(err),
    //    () => console.log('流已经结束了')
    // )
  }
   sendMessageServe() {
     this.wsService.sendMessage('hello word');
   }
}
