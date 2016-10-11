import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AddPage} from '../pages/add/add';
import {TaxiData} from '../providers/taxi-data';
import {TaxiListPage} from '../pages/taxi-list/taxi-list';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    TaxiListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    TaxiListPage
  ],
  providers: [TaxiData, Storage]
})
export class AppModule {}
