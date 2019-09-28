import {Component} from '@angular/core';
import {Customer} from './customerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './customerApp.view.html'
})
export class CustomerAppComponent {
  title = 'CustomerApplication';
  customerModel: Customer = new Customer();
}
