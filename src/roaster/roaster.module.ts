import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoasterComponent } from './roaster.component';

@NgModule({
  declarations: [
    RoasterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RoasterComponent]
})
export class RoasterModule { }
