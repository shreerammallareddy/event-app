import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../shared/events-service.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../models/event.model';
import { ISession } from '../models/session.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

 event:IEvent;
 addMode:boolean;
 filterBy:string = 'all';
 
  constructor(private eventsService:EventsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession(){
    this.addMode=true
  }

  saveNewSessionInEvent(session:ISession){
    console.log("save new session")
    const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
    session.id=nextId+1;
    this.event.sessions.push(session);
    this.eventsService.updateEvent(this.event);
    this.addMode = false;
  }

  onCancel(event){
    this.addMode = false;
  }

  filterByVal(value:string){
    this.filterBy = value;
  }

}
