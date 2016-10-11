import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
public data = {
    name : 'Delhi',
    country : 'in'
  }
  constructor(public view: ViewController) {
    this.view= view;
  }
  
  dismiss(formData){
    this.view.dismiss(formData);
  }
}
