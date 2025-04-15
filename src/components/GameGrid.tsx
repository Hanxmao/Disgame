import { SimpleGrid, Spinner } from "@chakra-ui/react";
import InifiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useInfiniteGames from "../hooks/useInfiniteGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

type Props = {
  genre?:string
}

const GameGrid = ({genre}:Props) => {
  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteGames(undefined, genre);

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
        p={1}
      >
        {isLoading &&
          [...Array(12)].map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages?.map((page) =>
          page.data.results.map((game) => (
            <Link to={`/games/${game.slug}`} key={game.id}>
              <GameCardContainer>
                <GameCard game={game} />
              </GameCardContainer>
            </Link>
          ))
        )}
      </SimpleGrid>
    </InifiniteScroll>
  );
};

export default GameGrid;
