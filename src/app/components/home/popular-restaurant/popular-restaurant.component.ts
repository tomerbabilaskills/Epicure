import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

import { IRestaurant } from 'src/app/interfaces';

@Component({
  selector: 'app-popular-restaurant',
  templateUrl: './popular-restaurant.component.html',
  styleUrls: ['./popular-restaurant.component.scss'],
})
export class PopularRestaurantComponent implements OnInit {
  data: IRestaurant[] = [];
  showMoreSrc: string = '../../../assets/images/icons/arrows-icon.svg';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getPopularRestaurants()
      .subscribe((data) => (this.data = data));
  }
}
