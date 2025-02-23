import ApiClient, { DataFetched } from "./api-client";
import { Platform } from "./platform-service";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default new ApiClient<DataFetched<Game>>("/games");
