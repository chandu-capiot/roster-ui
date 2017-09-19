import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoastrComponent } from './roastr.component';

@NgModule({
  declarations: [
    RoastrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RoastrComponent]
})
export class AppModule { }
