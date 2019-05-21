import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../shared/events-service.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

 event:IEvent; 
  constructor(private eventsService:EventsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
  }

}
