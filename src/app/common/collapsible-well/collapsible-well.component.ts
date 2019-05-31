import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.scss']
})
export class CollapsibleWellComponent implements OnInit {

  @Input() title:string;
  collapsible:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleContent(){
     this.collapsible = !this.collapsible;
  }

}
