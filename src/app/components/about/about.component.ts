import { Component, OnInit } from '@angular/core';
import {about_us} from '../../config/general';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public about_us = about_us;
  constructor() { }

  ngOnInit() {
  }

}
