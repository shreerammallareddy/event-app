import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  @Input() sessions:any[]
  constructor() { }

  ngOnInit() {
  }

}
