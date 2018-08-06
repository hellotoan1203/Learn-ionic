import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
/*
  Generated class for the ProcessDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcessDataProvider {

  constructor(private socket: Socket) {
    
  }
   getData(message: string) {
        return this.socket
            .fromEvent<any>(message)
            .map(data => data);
    }

    sendData(data: any, message: string) {
        this.socket
            .emit(message, data);
    }

}
