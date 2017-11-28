import { Component } from '@angular/core';
import {_cell} from './config/global_const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mobile = _cell;
}
