import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProcessDataProvider} from '../../providers/process-data/process-data';
import {RoomPage} from '../room/room';
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
  	this.provider.sendData({userName: un},"user");
  	this.navCtrl.setRoot(RoomPage,{userName: un});
  }
  
}
