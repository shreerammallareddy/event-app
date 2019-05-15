import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { EventsComponentComponent } from './events/components/events-component/events-component.component';
import { EventDetailsComponent } from './events/components/event-details/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EventsComponentComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
