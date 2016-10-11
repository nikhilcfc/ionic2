import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {TaxiData} from '../../providers/taxi-data';

@Component({
  selector: 'page-taxi-list',
  templateUrl: 'taxi-list.html'
})
export class TaxiListPage {
  public cityData;
  taxiList: Array<{ name: string, city: string, id: string,location :string }> = [];
  //public taxiList = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public taxiData: TaxiData) {
    this.cityData = navParams.get('cityData');
    this.taxiData.getTaxis().then((taxis = []) => {
      taxis.forEach(taxi => {
        if (taxi.city == this.cityData.name) {
          this.taxiList.push({
            name: taxi.name,
            city: taxi.city,
            id: taxi.id,
            location: taxi.location
          });
        }
      });
    });
  }

  
  ionViewDidLoad() {
    console.log('Hello TaxiList Page');
  }
}
