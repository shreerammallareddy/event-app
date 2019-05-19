import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

const routes: Routes = [
  
  {path:'events/new', component:CreateEventComponent},
  {path:'events' , component : EventsComponent},
  {path:'events/:id', component : EventDetailsComponent },
  {path:'' , redirectTo:'/events' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
