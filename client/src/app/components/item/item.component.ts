import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() type!: string;
  @Input() itemName!: string;
  @Input() description!: string;
  @Input() imgSrc!: string;
  @Input() price?: number;
  @Input() dishTypes?: string[];

  constructor() {}

  ngOnInit(): void {}
}
