import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventsService } from '../shared/events-service.service';
/* This class is created for activating the routes only when proper data exist*/
@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{
  
  constructor(private eventService:EventsService, private router:Router) { }
// can Activate in routing is used to prevent user to navigate that page in case of no data
  canActivate(route: ActivatedRouteSnapshot): boolean  {
    // Check if the event exists. Here '!!' means type casting to boolean 
    // Event service expects number so type cast the route param from string to number
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    // if event does not exist navigate to pagenotfound route else route to event page
    if(!eventExists){
      this.router.navigate(['pagenotfound']);
    }
    return eventExists;
  }
}
