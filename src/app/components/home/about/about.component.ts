import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  appStoreIconSrc: string = '../../../assets/images/icons/app-store.svg';
  googlePlayIconSrc: string = '../../../assets/images/icons/google-play.svg';
  aboutLogoSrc: string = '../../../assets/images/logo/about-logo.jpg';
  constructor() {}

  ngOnInit(): void {}
}
