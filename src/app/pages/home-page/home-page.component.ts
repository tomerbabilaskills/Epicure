import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'src/app/services/restaurant.service';

interface IRestaurant {
  name: string;
  description: string;
  imgSrc: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  data: { restaurants: IRestaurant[]; dishes: object[] } = {
    restaurants: [],
    dishes: [],
  };

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.data = this.restaurantService.mockData;
  }
}
