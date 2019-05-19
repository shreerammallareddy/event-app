import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventsData:any;
  
  constructor(private eventsService:EventsService) {}

  ngOnInit() {
    this.eventsData = this.eventsService.getEvents();
  }

}
