import { Component, OnInit } from '@angular/core';
import {_cell} from '../../config/global_const';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
  mobile = _cell;
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
  constructor() {
    console.log(this.mobile);
  }

  ngOnInit() {
  }

}
