import { Component, Input, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/interfaces';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: '[app-row-table]',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
})
export class rowTableComponent implements OnInit {
  @Input() item!: IRestaurant;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  deleteItem(id: string) {
    this.httpService.deleteRestaurant(id).subscribe((res) => location.reload());
  }
}
