import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";

const useGames = (ordering:string = "-rating", page_size:number=20, page:number=2, tags?:string) => {
  return useQuery(
    ["games", `${ordering||"no-order"}`,tags?`Tags${tags}`:'AllTags',`Size${page_size||20}`],
    () => {
      return gameService.getAll({
        params: {
          ordering: ordering,
          page_size: page_size,
          page:page,
          tags:tags,
          stores:`1,2,3,5,6,11`
            // 1, //steam
            // 2, //xbox
            // 3, //playstation
            // 4, //Apple store
            // 5, //GOG
            // 6, //Nintendo
            // 7, //xbox 360
            // 8, //Google play
            // 9, //itch.io
            // 11, //Epic
        },
      });
    },
    {staleTime: 24 * 60 * 60 * 1000} // 24 hours
  );
};

export default useGames