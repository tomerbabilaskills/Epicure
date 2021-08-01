import { Component, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/interfaces';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  data: IRestaurant[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getRestaurants().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
