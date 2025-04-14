import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";

const useGames = (ordering?:string, page_size?:number) => {
  return useQuery(
    ["games", `${ordering||"no-order"}${page_size||20}`],
    () => {
      return gameService.getAll({
        params: {
          ordering: ordering || "-rating",
          page_size: page_size ||20,
          page:2
        },
      });
    },
    {staleTime: 24 * 60 * 60 * 1000} // 24 hours
  );
};

export default useGames