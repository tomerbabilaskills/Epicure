import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.scss'],
})
export class SearchRestaurantComponent implements OnInit {
  searchIconSrc: string = '../../../assets/images/icons/search-icon.svg';
  constructor() {}

  ngOnInit(): void {}
}
