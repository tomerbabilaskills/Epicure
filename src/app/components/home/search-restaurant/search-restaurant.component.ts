import { Component, OnInit } from '@angular/core';

import { expand } from 'src/app/animations/search-restaurants-animation';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.scss'],
  animations: [expand],
})
export class SearchRestaurantComponent implements OnInit {
  show: boolean = true;
  searchIconSrc: string = '../../../assets/images/icons/search-icon.svg';
  constructor() {}

  ngOnInit(): void {}
}
