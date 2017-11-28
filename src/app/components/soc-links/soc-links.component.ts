import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-soc-links',
  templateUrl: './soc-links.component.html',
  styleUrls: ['./soc-links.component.css']
})
export class SocLinksComponent implements OnInit {
  soclinks = [
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

  constructor() {
  }

  ngOnInit() {
  }

}
