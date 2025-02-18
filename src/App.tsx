import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelecter from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const onSelectGenre = (genre:Genre)=>{
    setGameQuery({...gameQuery, genre})
  }
  const onSelectPlatform = (platform:Platform) =>{
    setGameQuery({...gameQuery, platform})
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem px={2} area={"aside"}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={onSelectGenre}></GenreList>
        </GridItem>
      </Show>
      <GridItem px="10px" area={"main"}>
        <PlatformSelecter onSelectPlatform={onSelectPlatform} selectedPlatform={gameQuery.platform} />
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
