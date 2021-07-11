import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss'],
})
export class ChefComponent implements OnInit {
  chefImgSrc: string = '../../../assets/images/untitled-1.jpg';
  constructor() {}

  ngOnInit(): void {}
}
