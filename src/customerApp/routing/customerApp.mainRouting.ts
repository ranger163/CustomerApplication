import {HomeComponent} from '../home/customerApp.homeComponent';
import {CustomerComponent} from '../customer/customerApp.customerComponent';
import {SupplierComponent} from '../supplier/customerApp.supplierComponent';

export const MainRouts = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'customer',
    component: CustomerComponent
  }, {
    path: 'supplier',
    component: SupplierComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
