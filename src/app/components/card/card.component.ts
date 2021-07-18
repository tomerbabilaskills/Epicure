import { Component, Input, OnInit } from '@angular/core';

import { IChefRestaurant, IDish, IRestaurant } from 'src/app/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() type: 'restaurant' | 'dish' = 'restaurant';
  @Input() size: string = 'big';
  @Input() data!: IRestaurant | IDish | IChefRestaurant;

  constructor() {}

  ngOnInit(): void {}

  getSrc(type: string): string {
    return `../../../assets/images/icons/${type}-icon.svg`;
  }

  isDish(object: any): object is IDish {
    return 'price' in object;
  }

  isDescription(object: any): object is IRestaurant | IDish {
    return 'description' in object;
  }
}
