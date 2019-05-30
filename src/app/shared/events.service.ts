import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  events = [
    {
      "title":"ANgular Connect",
      "date":"05/17/2019",
      "time":"8.00am",
      "price":"450.00",
      "location":"Boston, MA"
    },
    {
      "title":"Angular Meetup",
      "date":"05/17/2019",
      "time":"8.00am",
      "price":"450.00",
      "location":"Boston, MA",
      "online":"https://ascensuscollegesavings.atlassian.net/browse/JT-947"
    },
    {
      "title":"Angular Annual Conference",
      "date":"05/17/2019",
      "time":"8.00am",
      "price":"450.00",
      "location":"Boston, MA"
    },
    {
      "title":"Angular Annual Conference",
      "date":"05/17/2019",
      "time":"8.00am",
      "price":"450.00",
      "location":"Boston, MA"
    },
    {
      "title":"Angular Annual Conference",
      "date":"05/17/2019",
      "time":"8.00am",
      "price":"450.00",
      "location":"Boston, MA",
      "online":"https://ascensuscollegesavings.atlassian.net/browse/JT-947"
    },
    {
      "title":"Angular Annual Conference",
      "date":"05/17/2019",
      "time":"8.00am",
      "price":"450.00",
      "location":"Boston, MA",
      "online":"https://ascensuscollegesavings.atlassian.net/browse/JT-947"
    },
    {
      "title":"Angular Annual Conference",
      "date":"05/17/2019",
      "time":"8.00am",
      "price":"450.00",
      "location":"Boston, MA",
      "online":"https://ascensuscollegesavings.atlassian.net/browse/JT-947"
    },
    {
      "title":"Angular Annual Conference",
      "date":"05/17/2019",
      "time":"8.00am",
      "price":"450.00",
      "location":"Boston, MA",
      "online":"https://ascensuscollegesavings.atlassian.net/browse/JT-947"
    },
  ]


  getEvents(){
      return this.events;
  }
}
