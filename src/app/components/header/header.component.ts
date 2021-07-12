import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchIconSrc: string = '../../../assets/images/icons/search-icon.svg';
  userIconSrc: string = '../../../assets/images/icons/user-icon.svg';
  bagIconSrc: string = '../../../assets/images/icons/bag-icon.svg';
  logoSrc: string = '../../../assets/images/logo/logo.jpg';

  constructor() {}

  ngOnInit(): void {}
}
