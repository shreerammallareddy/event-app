import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  newEvent
  isDirty:boolean = true;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  saveEvent(formValues){
    console.log(formValues)
  }

  cancel(){
    this.router.navigate(['/events']);
  }

}
