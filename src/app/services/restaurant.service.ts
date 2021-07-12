import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  mockData = {
    restaurants: [
      {
        name: 'claro',
        description: 'Ran Shmueli',
        imgSrc: '../../assets/images/restaurants/claro.jpg',
      },
      {
        name: 'Lumina',
        description: 'Meir Adoni',
        imgSrc:
          '../../assets/images/restaurants/mizlala-gret-mullet-fillet.jpg',
      },
      {
        name: 'Tiger Lilly',
        description: 'Yanir Green',
        imgSrc: '../../assets/images/restaurants/tiger-lili.jpg',
      },
    ],
    dishes: [
      {
        restaurant: 'Tiger Lilly',
        name: 'Pad Ki Mao',
        description:
          'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
        price: 88,
        types: ['spicy'],
        imgSrc: '../../assets/images/dishes/pad-ki-mao.jpg',
      },
      {
        restaurant: 'Kab Kem',
        name: 'Garbanzo Frito',
        description:
          'Polenta fingers, veal cheek,magic chili cured lemoncream, yellow laksa',
        price: 98,
        types: [],
        imgSrc: '../../assets/images/dishes/garbanzo.jpg',
      },
      {
        restaurant: 'Popina',
        name: 'Smoked Pizza',
        description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
        price: 65,
        types: ['vegan'],
        imgSrc: '../../assets/images/dishes/pizza.jpg',
      },
    ],
    chefRestaurants: [
      {
        name: 'Ozna',
        imgSrc: '../../../assets/images/restaurants/ozna.jpg',
      },
      {
        name: 'Kitchen Market',
        imgSrc: '../../../assets/images/restaurants/kitchen-market.jpg',
      },
      {
        name: 'Mashya',
        imgSrc: '../../../assets/images/restaurants/mashya.jpg',
      },
    ],
  };
  constructor() {}
}
