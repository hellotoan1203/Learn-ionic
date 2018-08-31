import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';
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
   getData(path: string) {
        return this.db.list(path).snapshotChanges().pipe(
        map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      }

    sendData(data: any, path: string) {
       const itemsRef = this.db.list(path);
       itemsRef.push(data);
    }


}
