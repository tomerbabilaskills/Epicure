import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ChefsPageComponent } from './pages/chefs-page/chefs-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, data: { animation: 'home' } },
  {
    path: 'chefs',
    component: ChefsPageComponent,
    data: { animation: 'chefs' },
  },
  {
    path: 'restaurants',
    component: RestaurantsPageComponent,
    data: { animation: 'restaurants' },
  },
  { path: 'admin', component: AdminPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
