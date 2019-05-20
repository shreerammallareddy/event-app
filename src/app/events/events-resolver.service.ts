import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventsService } from './shared/events-service.service';
import { map } from 'rxjs/operators'
/**
 * This Class is created to resolve the routes
 * Resolving in the sense, it doesn't load page until all data
 * is retreived when an async (ajax) call is made to backend which
 * takes certain time to load data
 */
@Injectable({
  providedIn: 'root'
})
export class EventsResolverService implements Resolve<any>{
  

  constructor(private eventService:EventsService) { }
/**
 * Here we are waiting till we get all the data from events Service getEvents()
 * method which makes an async call
 * getEvents() method returns as Observable and we are calling map
 * on that observable to fetch the events which are passed in that stream
 * 
 */

resolve(route: ActivatedRouteSnapshot) {
  return this.eventService.getEvents().pipe(map(events => events));
}
  
}
