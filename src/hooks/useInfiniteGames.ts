import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "../services/api-client";
import { DataFetched } from "../entites";
import { Game } from "../entites";
import useGameQueryStore from "../stores/gameQueryStore";


const useInfiniteGames = (page_size:number=20, genre?:string) => {
  const { gameQuery } = useGameQueryStore();
  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["infinite_games", gameQuery, genre],
    async ({ pageParam = 1 }) => {
      const res = axiosInstance.get<DataFetched<Game>>("/games", {
        params: {
          genres: genre||gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.search,
          page: pageParam,
          page_size: page_size,
        },
      });
      return res;
    },
    {
      staleTime: 1000 * 1 * 60 * 30, //30 mins
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.next ? allPages.length + 1 : null;
      },
      keepPreviousData: true,
    }
  );
  return { isLoading, data, fetchNextPage, hasNextPage };
};

export default useInfiniteGames;
