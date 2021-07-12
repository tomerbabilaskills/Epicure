import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() type!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() imgSrc!: string;
  @Input() price?: string;
  @Input() dishTypes?: string[];
  @Input() size: string = 'big';

  constructor() {}

  ngOnInit(): void {}

  getSrc(type: string): string {
    return `../../../assets/images/icons/${type}-icon.svg`;
  }
}
