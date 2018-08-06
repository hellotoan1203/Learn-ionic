import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatAreaPage } from './chat-area';

@NgModule({
  declarations: [
    ChatAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatAreaPage),
  ],
})
export class ChatAreaPageModule {}
