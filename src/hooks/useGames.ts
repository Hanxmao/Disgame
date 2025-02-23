import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { axiosInstance, DataFetched } from "../services/api-client";
import { Game } from "../services/game-service";

const getGames = async (gameQuery: GameQuery) => {
  const res = await axiosInstance.get<DataFetched<Game>>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sort,
      search: gameQuery.search,
    },
  });
  return res.data;
};

const useGames = (gameQuery: GameQuery) =>
  useQuery<DataFetched<Game>, Error>(
    ["games", gameQuery], 
    () => getGames(gameQuery), 
  );

export default useGames;
