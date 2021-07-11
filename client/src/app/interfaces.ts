export interface IRestaurant {
  name: string;
  description: string;
  imgSrc: string;
}

export interface IIcon {
  name: string;
  path: string;
}

export interface IDish {
  name: string;
  description: string;
  imgSrc: string;
  price: string;
  types: string[];
}
