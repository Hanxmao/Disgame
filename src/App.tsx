import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelecter from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null)

  const onSelectGenre = (genre:Genre)=>{
    setSelectedGenre(genre)
  }
  const onSelectPlatform = (platform:Platform) =>{
    setSelectedPlatform(platform)
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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre}></GenreList>
        </GridItem>
      </Show>
      <GridItem px="10px" area={"main"}>
        <PlatformSelecter onSelectPlatform={onSelectPlatform} selectedPlatform={selectedPlatform} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  );
}

export default App;
