import { Component, OnInit } from '@angular/core';
import { faSchool, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public faSchool = faSchool;
  public faAddressCard = faAddressCard;
  public imgsrc = 'assets/hom17.jpg';

  public list = [
    { img: 'assets/hom2.jpeg' },
    { img: 'assets/hom1.jpeg' },
    { img: 'assets/hom3.jpeg' },
    { img: 'assets/hom4.jpeg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
