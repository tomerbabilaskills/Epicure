import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'src/app/services/restaurant.service';

import { IDish } from 'src/app/interfaces';

@Component({
  selector: 'app-popular-dish',
  templateUrl: './popular-dish.component.html',
  styleUrls: ['./popular-dish.component.scss'],
})
export class PopularDishComponent implements OnInit {
  data: IDish[] = [];
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.data = this.restaurantService.mockData.dishes;
  }
}
