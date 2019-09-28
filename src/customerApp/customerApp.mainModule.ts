import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CustomerAppComponent} from './customer/customerApp.customerComponent';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CustomerAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerAppComponent]
})
export class CustomerAppMainModule {
}
