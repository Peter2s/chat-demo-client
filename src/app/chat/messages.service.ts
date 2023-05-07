import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParamsOptions} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http :HttpClient) { }
  public getMessages(firstTime?:boolean): Observable<any> {
    return this.http.get(`http://localhost:3000/short/message?firstTime=${firstTime}`);
  }

  sendMessage(message: any[]) {
    const msg = {"content":message}
    console.log(msg)
    this.http.post(`http://localhost:3000/short/message`, msg).subscribe(data => {console.log(data);}, err =>console.error(err));
  }
}
