import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../services/game-service";
import { axiosInstance, DataFetched } from "../services/api-client";

type Props = {
  gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: Props) => {

  const { isLoading,data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["games"],
      async ({ pageParam = 1 }) => {
        const res = axiosInstance.get<DataFetched<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort,
            search: gameQuery.search,
            page: pageParam,
            page_size: 20,
          },
        });
        return res;
      },
      {
        staleTime: 1000 * 1 * 60, //60 sec
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.data.next? allPages.length+1: null;
        },
        keepPreviousData: true,
      }
    );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }} spacing={6}>
      {isFetchingNextPage||isLoading &&
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
      <Button onClick={()=>{fetchNextPage()}}>Load More</Button>
    </SimpleGrid>
  );
};

export default GameGrid;
