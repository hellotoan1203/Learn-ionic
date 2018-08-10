import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatAreaPage } from '../pages/chat-area/chat-area';
import { ProcessDataProvider } from '../providers/process-data/process-data';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig =  {
    apiKey: "AIzaSyBL4V44ua7rR_nCEI6ANu5hrIBTtIqCs5M",
    authDomain: "chatfunny-a645d.firebaseapp.com",
    databaseURL: "https://chatfunny-a645d.firebaseio.com",
    projectId: "chatfunny-a645d",
    storageBucket: "chatfunny-a645d.appspot.com",
    messagingSenderId: "541736717214"
  }
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatAreaPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatAreaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProcessDataProvider
  ]
})
export class AppModule {}
