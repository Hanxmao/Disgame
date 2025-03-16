import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { DataFetched } from "../services/api-client";
import gameService, { Game } from "../services/game-service";

const useGames = (gameQuery: GameQuery) =>
  useQuery<DataFetched<Game>, Error>(["games", gameQuery], () =>
    gameService.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort,
        search: gameQuery.search,
      },
    })
  );

export default useGames;
