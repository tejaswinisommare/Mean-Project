import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public imgsrc = 'assets/hom17.jpg';

  public list = [
    { img: 'assets/hom2.jpeg' },
    { img: 'assets/hom1.jpeg' },
    { img: 'assets/hom3.jpeg' },
    { img: 'assets/hom4.jpeg' },
    { img: 'assets/hom5.jpeg' },
    { img: 'assets/hom6.jpeg' },
    { img: 'assets/hom7.jpeg' },
    { img: 'assets/hom8.jpeg' },
    { img: 'assets/hom9.jpeg' },
    { img: 'assets/hom10.jpeg' },
    { img: 'assets/hom11.jpeg' },
    { img: 'assets/hom12.jpeg' },
    { img: 'assets/hom13.jpeg' },
    { img: 'assets/hom14.jpeg' },
    { img: 'assets/hom15.jpeg' },
    { img: 'assets/hom16.jpeg' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
