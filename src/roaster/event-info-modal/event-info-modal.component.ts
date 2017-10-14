import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-info-modal',
  templateUrl: './event-info-modal.component.html',
  styleUrls: ['./event-info-modal.component.scss']
})
export class EventInfoModalComponent implements OnInit {

  @Input() eventInfo: any;
  constructor() { }

  ngOnInit() {
    console.log('initiated');
  }

}
