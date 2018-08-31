import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcessDataProvider} from '../../providers/process-data/process-data';
import {ChatAreaPage} from '../chat-area/chat-area';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  rooms: {}[];
  userName: any;
  chatarea: any = ChatAreaPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ProcessDataProvider ) {
  	this.userName= this.navParams.get("userName");
  	this.addRoom('root');
  }

  ionViewDidLoad() {
   this.getRoom().subscribe(
    	data =>{
    		this.rooms = data;
    	}
    )
  }
  getRoom(){
  	return this.provider.getData("rooms");
  }

  joinRoom(key: string, roomName: string){
  	this.navCtrl.setRoot(this.chatarea,{
  		keyRoom: key ,
  		userName: this.userName,
  		roomName: roomName
  	});	
  }

  addRoom(name: string){
  	 this.provider.sendData({roomName: name}, "/rooms");
  }

}
