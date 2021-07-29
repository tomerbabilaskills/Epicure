import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'src/app/services/restaurant.service';
import { HttpService } from 'src/app/services/http.service';

import { IChefOfTheWeek, IChefRestaurant } from 'src/app/interfaces';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss'],
})
export class ChefComponent implements OnInit {
  data: IChefOfTheWeek = {
    name: '',
    description: '',
    imgUrl: '',
    restaurants: [],
  };
  chefImgSrc: string = '../../../assets/images/chef.jpg';
  constructor(
    private restaurantService: RestaurantService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    // this.data = this.restaurantService.mockData.chefRestaurants;
    this.httpService.getChefOfTheWeek().subscribe((data) => (this.data = data));
  }
}
