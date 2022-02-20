import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { image } from 'src/app/interfaces/image.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myImage :Array<image>=[
    {photoUrl : "assets/imags/about/gallary/1.png"},
    {photoUrl : "assets/imags/about/gallary/2.png"},
    {photoUrl : "assets/imags/about/gallary/3.png"},
    {photoUrl : "assets/imags/about/gallary/4.png"},
    {photoUrl : "assets/imags/about/gallary/5.png"},
    {photoUrl : "assets/imags/about/gallary/6.png"},
  ]
  myPhoto :Array<image>=[
    {photoUrl : "assets/imags/about/instgram/1.png"},
    {photoUrl : "assets/imags/about/instgram/2.png"},
    {photoUrl : "assets/imags/about/instgram/3.png"},
    {photoUrl : "assets/imags/about/instgram/4.png"},
    {photoUrl : "assets/imags/about/instgram/5.png"},
    {photoUrl : "assets/imags/about/instgram/6.png"},
  ]
  constructor() {
  }

  ngOnInit(): void {
  }
  

}
