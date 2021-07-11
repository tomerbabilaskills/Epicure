import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
