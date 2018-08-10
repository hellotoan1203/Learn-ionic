import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat'
import { AngularFireDatabase} from 'angularfire2/database';
/*
  Generated class for the ProcessDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcessDataProvider {

  constructor(private db: AngularFireDatabase) {
    
  }
   getData(message: string) {

        return this.db.list(message).valueChanges();
      }

    sendData(data: any, message: string) {
       const itemsRef = this.db.list(message);
       itemsRef.push(data);
    }

}
