import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProcessDataProvider} from '../../providers/process-data/process-data';
import {} from '@angular/forms';

/**
 * Generated class for the ChatAreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-area',
  templateUrl: 'chat-area.html',
  providers: [ProcessDataProvider]
})
export class ChatAreaPage {
  userName: string;
  message: string;
  listMessage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ProcessDataProvider) {
  		this.userName=this.navParams.get("userName");
      this.getMessage();
  }

  ionViewDidLoad() {
    
  }
  sendMessage(msg: string){
  	this.provider.sendData(
      {message: msg, userName: this.userName, date: new Date()},
      "send_message");
    this.message="";
  }
  getMessage(){
  	this.provider.getData("get_message").subscribe(
  		data=>{
        this.listMessage=data;
  		})
   }

}
