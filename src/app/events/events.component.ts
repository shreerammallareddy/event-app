import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events-service.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventsData:IEvent[];
  
  constructor(private eventsService:EventsService, private route:ActivatedRoute) {}

  ngOnInit() {
    // Here we subscribing the event for which we have screate the subscription in events service class
    this.eventsService.getEvents().subscribe(events => {this.eventsData = events});
    // Since we have handled the data resolution in event-resolver service no need for above line
    
    // Resolv has issue so will fix it later
    // this.eventsData = this.route.snapshot.data['eventsResolverDataFromRoute'];
    
  }

}
