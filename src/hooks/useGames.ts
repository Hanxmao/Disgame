import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

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

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery.sort, search: gameQuery.search } },
    [gameQuery]
  );

export default useGames;
