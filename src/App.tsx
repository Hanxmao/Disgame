import {
  Grid,
  GridItem,
  HStack,
  Show
} from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelecter from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };
  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const onSelectSort = (sort: string) => {
    setGameQuery({ ...gameQuery, sort });
  };

  const onSearch = (search: string) => {
    setGameQuery({ ...gameQuery, search });
  }

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
        <Navbar onSearch={onSearch}/>
      </GridItem>
      <Show above="lg">
        <GridItem px={2} area={"aside"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={onSelectGenre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem px="10px" area={"main"}>
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} mb={5}>
          <PlatformSelecter
            onSelectPlatform={onSelectPlatform}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector onSelectSort={onSelectSort} selectedSort={gameQuery.sort} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
