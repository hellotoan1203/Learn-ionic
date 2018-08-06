import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { HomePage} from '../pages/home/home';

import { ChatAreaPage} from '../pages/chat-area/chat-area';
import { ProcessDataProvider} from '../providers/process-data/process-data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  listUser: any;
  constructor(platform: Platform, private provider: ProcessDataProvider) {
    platform.ready().then(() => {
      this.provider.getData("get_list_user").subscribe(
          data=>{
            this.listUser=data;
          }
        );
    });
  }
}

