import { Box, Heading, VStack } from "@chakra-ui/react";
import HomeBanner from "../components/HomeBanner";
import GameList from "../components/GameList";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <GameList tagName="FPS" genre={`shooter`} />
      <GameList tagName="RPG" genre={`role-playing-games-rpg`} />
      <GameList tagName="Adventure" genre={`adventure`} />
    </>
  );
};

export default HomePage;
