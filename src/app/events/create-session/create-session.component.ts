import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISession } from '../models/session.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter
  formGroup: FormGroup;
  sessionName:FormControl;
  presenter:FormControl;
  duration:FormControl;
  level:FormControl;
  abstract:FormControl;



  constructor() { }

  ngOnInit() {
    this.sessionName = new FormControl('',Validators.required);
    this.presenter = new FormControl('',Validators.required);
    this.duration = new FormControl('',Validators.required);
    this.level = new FormControl('',Validators.required);
    this.abstract = new FormControl('',Validators.required);

    this.formGroup = new FormGroup({
      sessionName:this.sessionName,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract
    });


  }

  saveSession(formValues){
    let session:ISession = {
      id: undefined,
      name: formValues.sessionName,
      duration: +formValues.duration,
      level:formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters:[]
    }
    console.log(session);
    this.saveNewSession.emit(session);
  }

}
