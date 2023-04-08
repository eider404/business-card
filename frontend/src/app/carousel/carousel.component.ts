import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  slides = [
    { id: 'slide1', image: 'https://via.placeholder.com/900x300/111/fff?text=Slide+1', title: 'Slide 1 title', text: 'Slide 1 description' },
    { id: 'slide2', image: 'https://via.placeholder.com/900x300/222/fff?text=Slide+2', title: 'Slide 2 title', text: 'Slide 2 description' },
    { id: 'slide3', image: 'https://via.placeholder.com/900x300/333/fff?text=Slide+3', title: 'Slide 3 title', text: 'Slide 3 description' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
