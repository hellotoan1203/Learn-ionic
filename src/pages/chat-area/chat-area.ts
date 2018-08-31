import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProcessDataProvider} from '../../providers/process-data/process-data';
import {} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-chat-area',
  templateUrl: 'chat-area.html',
  providers: [ProcessDataProvider]
})
export class ChatAreaPage {
  key: string;
  roomName: string;
  userName: any;
  message: string;
  listMessage: {}[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ProcessDataProvider) {
  		this.key =this.navParams.get("keyRoom");
      this.roomName=this.navParams.get("roomName");
      console.log(this.key)
      this.userName =this.navParams.get("userName");
      this.getMessage();
  }

  ionViewDidLoad() {
    
  }
  sendMessage(msg: string){
  	this.provider.sendData(
      {
        message: msg, 
        userName: this.userName
      },
      "/rooms/"+this.key+"/message");
    this.message="";
  }
  getMessage(){
  	this.provider.getData("/rooms/"+this.key+"/message").subscribe(
  		data=>{
        this.listMessage=data;
  		})
   }

}
