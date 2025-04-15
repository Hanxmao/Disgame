import { Box, Heading, VStack } from "@chakra-ui/react";
import HomeBanner from "../components/HomeBanner";
import GameList from "../components/GameList";

const HomePage = () => {
  return (
    <>
        <HomeBanner />
      <GameList tagName="RPG" tags={`24`}/>
      <GameList tagName="Open World" tags={`36`}/>
      <GameList tagName="FPS" tags={`30`}/>
    </>
  );
};

export default HomePage;
