import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProcessDataProvider} from '../../providers/process-data/process-data';
import {ChatAreaPage} from '../chat-area/chat-area';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProcessDataProvider]
})
export class HomePage {
  nameUser: string;
  constructor(public navCtrl: NavController, private provider: ProcessDataProvider) {
  	
  }
  sendUser(un: string){
  	this.provider.sendData(un,"user");
  	this.navCtrl.setRoot(ChatAreaPage,{userName: un});
  }
  
}
