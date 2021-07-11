import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchIconSrc: string = '../../../assets/images/search-icon.svg';
  userIconSrc: string = '../../../assets/images/user-icon.svg';
  bagIconSrc: string = '../../../assets/images/bag-icon.svg';
  logoSrc: string = '../../../assets/logo/logo.jpg';

  constructor() {}

  ngOnInit(): void {}
}
