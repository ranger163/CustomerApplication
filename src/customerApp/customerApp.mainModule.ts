import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CustomerComponent} from './customer/customerApp.customerComponent';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/customerApp.homeComponent';
import {SupplierComponent} from './supplier/customerApp.supplierComponent';
import {MasterPageComponent} from './home/customerApp.masterPageComponent';
import {RouterModule} from '@angular/router';
import {MainRouts} from './routing/customerApp.mainRouting';

@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    MasterPageComponent,
    SupplierComponent
  ],
  imports: [
    RouterModule.forRoot(MainRouts),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerAppMainModule {
}
