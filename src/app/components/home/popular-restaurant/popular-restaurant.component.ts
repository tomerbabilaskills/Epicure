import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'src/app/services/restaurant.service';
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

  constructor(
    private restaurantService: RestaurantService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    // this.data = this.restaurantService.mockData.restaurants;
    this.httpService.getRestaurants().subscribe((data) => (this.data = data));
  }
}
