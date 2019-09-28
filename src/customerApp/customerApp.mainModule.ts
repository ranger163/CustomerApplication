import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CustomerAppComponent} from './customer/customerApp.customerComponent';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/customerApp.homeComponent';
import {SupplierComponent} from './supplier/customerApp.supplierComponent';
import {MasterPageComponent} from './home/customerApp.masterPageComponent';

@NgModule({
  declarations: [
    CustomerAppComponent,
    HomeComponent,
    MasterPageComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerAppMainModule {
}
