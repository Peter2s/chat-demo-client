import {Component, OnInit} from '@angular/core';
import {MessagesService} from "./messages.service";
import {empty} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages = [];
  message = null;
constructor(private messageService: MessagesService) {
}

  ngOnInit(): void {
    this.messageService.getMessages(true).subscribe((messages: any)=>{
      messages = messages.map((m: any)=>{ return  m.content})
      this.messages = messages;
      console.log(this.messages)
    });

    setInterval(() => {
      this.messageService.getMessages(false).subscribe((messages: any)=>{
        if(messages.length > 0) {
        messages = messages.map((m: any)=>{ return  m.content})
        // @ts-ignore
          this.messages.push(messages);
          console.log(messages)
        }
      })
    }, 5000);

  }

  sendMessage(event:any){
  event.preventDefault();
  // @ts-ignore
    this.messageService.sendMessage(this.message);
  }

}
