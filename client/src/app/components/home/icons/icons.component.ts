import { Component, OnInit } from '@angular/core';

import { IIcon } from 'src/app/interfaces';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  icons: IIcon[] = [
    { name: 'Spicy', path: '../../../assets/images/icons/spicy-icon.svg' },
    { name: 'Vegetarian', path: '../../../assets/images/icons/vegetarian.svg' },
    { name: 'Vegan', path: '../../../assets/images/icons/vegan-icon.svg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
