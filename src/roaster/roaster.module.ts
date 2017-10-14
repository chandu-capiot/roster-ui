import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoasterComponent } from './roaster.component';
import { EventInfoModalComponent } from './event-info-modal/event-info-modal.component';

@NgModule({
  declarations: [
    RoasterComponent,
    EventInfoModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RoasterComponent]
})
export class RoasterModule { }
