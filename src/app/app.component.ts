import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import { HomePage} from '../pages/home/home';

import { ChatAreaPage} from '../pages/chat-area/chat-area';
import { ProcessDataProvider} from '../providers/process-data/process-data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  listUser: Observable<any[]>;
  constructor(platform: Platform, private provider: ProcessDataProvider) {
    platform.ready().then(() => {
      this.provider.getData("user").subscribe(
          data=>{
            console.log(data);
            this.listUser=data;
          }
        );
    });
  }
}

