export interface IRestaurant {
  _id: string;
  name: string;
  description: string;
  imgUrl: string;
}

export interface IChefRestaurant {
  name: string;
  imgUrl: string;
}

export interface IChefOfTheWeek {
  _id: string;
  name: string;
  description: string;
  imgUrl: string;
  restaurants: IChefRestaurant[];
}

export interface IIcon {
  name: string;
  path: string;
}

export interface IDish {
  _id: string;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  tags: string[];
  restaurant: string;
}
