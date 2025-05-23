export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
}
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
export interface IconPlatform {
  id: number;
  name: string;
  slug:
    | "pc"
    | "playstation"
    | "xbox"
    | "nintendo"
    | "mac"
    | "linux"
    | "ios"
    | "web"
    | "android";
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface DataFetched<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

export interface Tag {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  description:string
}

export interface User {
  _id: string;
  username: string;
  email: string;
  avatarUrl: string;
}