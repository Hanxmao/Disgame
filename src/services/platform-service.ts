import ApiClient, { DataFetched } from "./api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
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

export default new ApiClient<DataFetched<Platform>>("/platforms/lists/parents");
