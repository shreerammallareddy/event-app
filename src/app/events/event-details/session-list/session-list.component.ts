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
  @Input() sortBy:string;

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
      // we Sort the Objects by passing the comparator where we implement our own sorting logic on objects
      // We can imporve below logic by creatign a generic function to sort any passed field
      this.sortBy === 'name'? this.visibleSessions.sort(sortByNameAsc):this.visibleSessions.sort(sortByVotes)
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

/**
 * This method compares the Session Object name property
 * @param s1 : First Object to be compared
 * @param s2 : Second Object compared against
 */
function sortByNameAsc(s1:ISession, s2:ISession){
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByVotes(s1:ISession, s2:ISession){
  let votes1 = s1.voters?s1.voters.length:0;
  let votes2 = s2.voters?s2.voters.length:0;
  return votes2-votes1;
}
