import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  slideConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'autoplay': true,
    'autoplayspeed': 100,
    'infinite': true
  };

  constructor() { }

  ngOnInit() {
  }

}
