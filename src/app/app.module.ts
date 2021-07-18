import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchRestaurantComponent } from './components/home/search-restaurant/search-restaurant.component';
import { PopularRestaurantComponent } from './components/home/popular-restaurant/popular-restaurant.component';
import { PopularDishComponent } from './components/home/popular-dish/popular-dish.component';
import { IconsComponent } from './components/home/icons/icons.component';
import { ChefComponent } from './components/home/chef/chef.component';
import { AboutComponent } from './components/home/about/about.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RouteButtonsMobileComponent } from './components/home/route-buttons-mobile/route-buttons-mobile.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';
import { ChefsPageComponent } from './pages/chefs-page/chefs-page.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: true,
  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 13.5,
    },
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    SearchRestaurantComponent,
    PopularRestaurantComponent,
    PopularDishComponent,
    IconsComponent,
    ChefComponent,
    AboutComponent,
    SearchBarComponent,
    RouteButtonsMobileComponent,
    RestaurantsPageComponent,
    ChefsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SwiperModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
