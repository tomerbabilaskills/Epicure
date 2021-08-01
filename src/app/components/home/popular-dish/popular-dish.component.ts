import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

import { IDish } from 'src/app/interfaces';

@Component({
  selector: 'app-popular-dish',
  templateUrl: './popular-dish.component.html',
  styleUrls: ['./popular-dish.component.scss'],
})
export class PopularDishComponent implements OnInit {
  data: IDish[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getDishes().subscribe((data) => (this.data = data));
  }
}
