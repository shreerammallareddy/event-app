import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../models/session.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions:ISession[]
  @Input() filterBy:string;

  visibleSessions:ISession[] = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * ngOnChanges in used to write logic whenever there are changes to variables marked with
   * @Input() decorator
   */
  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filterString:string){
    if(filterString === 'all'){
      //Slice method slices a part of array and returns it as a new array object preserving old array object
      //hence we are not modifying the original array
      this.visibleSessions = this.sessions.slice(0);
    }else{
      this.visibleSessions = this.sessions.filter( session => {
        return session.level.toLocaleLowerCase() === filterString;
      } )
    }
  }

}
