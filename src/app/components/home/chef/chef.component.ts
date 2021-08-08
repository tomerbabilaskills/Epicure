import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

import { IChefOfTheWeek } from 'src/app/interfaces';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss'],
})
export class ChefComponent implements OnInit {
  data: IChefOfTheWeek = {
    _id: '',
    name: '',
    description: '',
    imgUrl: '',
    restaurants: [],
  };
  chefImgSrc: string = '../../../assets/images/chef.jpg';
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getChefOfTheWeek().subscribe((data) => (this.data = data));
  }
}
