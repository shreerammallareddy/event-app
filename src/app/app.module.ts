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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EventDetailsComponent,
    EventsComponent,
    EventThumbnailComponent,
    CreateEventComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
