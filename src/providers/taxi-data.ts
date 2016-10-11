import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaxiData {

  data: any;
  public taxiList = [];
  constructor(public http: Http) { }

  // Initialize the data
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('assets/data/data.json').subscribe(res => {
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }

  //Method to Process the data
  processData(data) {
    data.names = [];
    // loop through each taxi in the List
    data.taxis.forEach(taxi => {
      data.names.push(taxi.name);
    });
    return data;
  }

  getTaxis() {
    return this.load().then(data => {
      return data.taxis;
    });
  }
}
