import {Component} from '@angular/core';
import {Customer} from './customerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './customerApp.customerView.html'
})
export class CustomerAppComponent {
  customerModel = new Customer();
  customerModels = new Array<Customer>();

  addCustomer() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer();
  }
}
