import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();
  const { data: paltforms } = usePlatforms();
  const { data: genres } = useGenres();

  const selectedPlatform = paltforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const selectedGenre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const platform = selectedPlatform ? selectedPlatform.name + " " : "";
  const genre = selectedGenre ? selectedGenre.name + " " : "";

  return (
    <Heading as="h1" my={4} fontSize={"4xl"}>
      {platform + genre}Games
    </Heading>
  );
};

export default GameHeading;
