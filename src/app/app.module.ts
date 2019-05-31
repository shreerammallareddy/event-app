import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { EventsComponent } from './events/events.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventsService } from './events/shared/events-service.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventsResolverService } from './events/events-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EventDetailsComponent,
    EventsComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventsService,
     EventRouteActivatorService,
     EventsResolverService,
     {provide:'canDeactivateRouter', useValue:checkDirtyState},
     AuthService     
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// route deactivator discouage user from navigating away from the current page. 
// we use this if we want to warn the user before saving the state of application before 
// navigating to different page
export function checkDirtyState(createEvent:CreateEventComponent){
  if(createEvent.isDirty){
    return window.confirm("You have not saved the form, do you really want to Cancel?")
  }
  return true;
}
