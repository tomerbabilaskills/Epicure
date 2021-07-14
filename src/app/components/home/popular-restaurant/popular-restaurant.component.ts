import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper/core';
import { SwiperComponent } from 'swiper/angular';

import { RestaurantService } from 'src/app/services/restaurant.service';

import { IRestaurant } from 'src/app/interfaces';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-popular-restaurant',
  templateUrl: './popular-restaurant.component.html',
  styleUrls: ['./popular-restaurant.component.scss'],
})
export class PopularRestaurantComponent implements OnInit {
  data: IRestaurant[] = [];
  showMoreSrc: string = '../../../assets/images/icons/arrows-icon.svg';

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.data = this.restaurantService.mockData.restaurants;
  }
}
