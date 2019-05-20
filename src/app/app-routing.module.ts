import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventsResolverService } from './events/events-resolver.service';

/**
 * Will use below resolver later
 * {path:'events' , component : EventsComponent, resolve:{eventsResolverDataFromRoute:EventsResolverService}},
 */
  
const routes: Routes = [
  
  {path:'events/new', component:CreateEventComponent , canDeactivate:['canDeactivateRouter']},
  {path:'events' , component : EventsComponent},
  {path:'events/:id', component : EventDetailsComponent, canActivate:[EventRouteActivatorService] },
  {path:'pagenotfound',component:ErrorComponent},
  {path:'' , redirectTo:'/events' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
