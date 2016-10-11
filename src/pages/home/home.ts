import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {AddPage} from '../add/add';
import {TaxiListPage} from '../taxi-list/taxi-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public cityList = [];

  // Constructor function
  constructor(public navController: NavController,
  public modalCtrl: ModalController) {
    this.navController = navController;
  }

   // Add City for Weather view
  addCity() {
    let addCityModal = this.modalCtrl.create(AddPage);
    addCityModal.present();
    addCityModal.onDidDismiss((data: any[]) => {
      if (data) {
        this.cityList.push(data);
      }
    });
    this.navController.push(AddPage);
  }

   // View Forecast for 7 days
  viewTaxiList(cityData) {
    console.log('View Taxi List');
    this.navController.push(TaxiListPage, { cityData: cityData });
  }

}
