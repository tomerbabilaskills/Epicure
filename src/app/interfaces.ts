export interface IRestaurant {
  name: string;
  description: string;
  imgUrl: string;
}

export interface IChefRestaurant {
  name: string;
  imgUrl: string;
}

export interface IIcon {
  name: string;
  path: string;
}

export interface IDish {
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  tags: string[];
  restaurant: string;
}
