import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'src/app/services/restaurant.service';

interface IRestaurant {
  name: string;
  description: string;
  imgSrc: string;
}

@Component({
  selector: 'app-popular-restaurant',
  templateUrl: './popular-restaurant.component.html',
  styleUrls: ['./popular-restaurant.component.scss'],
})
export class PopularRestaurantComponent implements OnInit {
  data: IRestaurant[] = [];
  showMoreSrc: string = '../../../assets/images/all-restaurants-arrows.svg';

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.data = this.restaurantService.mockData.restaurants;
  }
}
