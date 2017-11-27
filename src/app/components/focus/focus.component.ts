import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
  events=[{
    name: 'Techshiksha',
    content: 'event | 25/6/17',
    link: 'techshiksha'
  },{
    name: 'Glider Workshop',
    content: 'workshop | 23/1/18',
    link: 'glider_workshop'
  }
  ];
  soclinks=[
    {
      name: 'facebook',
      pic: 'fb',
      color: 'blue'
    },
    {
      name: 'google',
      pic: 'google',
      color: 'red'
    },
    {
      name: 'linkedin',
      pic: 'linkedin',
      color: 'blue'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
