import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance, DataFetched } from "../services/api-client";
import { Game } from "../services/game-service";
import useGameQueryStore from "../stores/gameQueryStore";

const useGames = () => {
  const { gameQuery } = useGameQueryStore();
  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["games", gameQuery],
    async ({ pageParam = 1 }) => {
      const res = axiosInstance.get<DataFetched<Game>>("/games", {
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.search,
          page: pageParam,
          page_size: 20,
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
  return {isLoading, data, fetchNextPage, hasNextPage}
};

export default useGames;
