import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'src/app/services/restaurant.service';

import { IChefRestaurant } from 'src/app/interfaces';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss'],
})
export class ChefComponent implements OnInit {
  data: IChefRestaurant[] = [];
  chefImgSrc: string = '../../../assets/images/untitled-1.jpg';
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.data = this.restaurantService.mockData.chefRestaurants;
  }
}
