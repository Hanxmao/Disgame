import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InifiniteScroll from "react-infinite-scroll-component";
import { axiosInstance, DataFetched } from "../services/api-client";
import { Game } from "../services/game-service";
import useGameQueryStore from "../stores/gameQueryStore";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
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

  return (
    <InifiniteScroll
      dataLength={data?.pages.length || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        spacing={6}
      >
        {isLoading &&
          [...Array(12)].map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages?.map((page) =>
          page.data.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))
        )}
      </SimpleGrid>
    </InifiniteScroll>
  );
};

export default GameGrid;
