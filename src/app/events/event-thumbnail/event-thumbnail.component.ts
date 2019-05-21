import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../models/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() eventData:IEvent;

  constructor() { }

  ngOnInit() {
  }

}
