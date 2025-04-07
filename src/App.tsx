import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelecter from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./services/genre-service";
import { Platform } from "./services/platform-service";
import useGameQueryStore from "./stores/gameQueryStore";

function App() {
  const { gameQuery, update } = useGameQueryStore();

  const onSelectGenre = (genre: Genre) => {
    update({ genreId: genre.id });
  };
  const onSelectPlatform = (platform: Platform) => {
    update({ platformId: platform.id });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem px={2} area={"aside"}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={onSelectGenre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem px="10px" area={"main"}>
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} mb={5}>
          <PlatformSelecter
            onSelectPlatform={onSelectPlatform}
            selectedPlatformId={gameQuery.platformId}
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
