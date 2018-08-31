import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage} from '../pages/home/home';
import { ProcessDataProvider} from '../providers/process-data/process-data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  listUser: {}[] ;
  constructor(platform: Platform, private provider: ProcessDataProvider) {
    platform.ready().then(() => {
      this.provider.getData("user").subscribe(
          data=>{
            this.listUser=data;
          }
        );
    });
  }
}

