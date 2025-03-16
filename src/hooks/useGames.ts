import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { DataFetched } from "../services/api-client";
import gameService, { Game } from "../services/game-service";

const useGames = (gameQuery: GameQuery) =>
  useQuery<DataFetched<Game>, Error>(["games", gameQuery], () =>
    gameService.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sort,
        search: gameQuery.search,
      },
    })
  );

export default useGames;
