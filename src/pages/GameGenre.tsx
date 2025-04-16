import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router";
import GameGrid from "../components/GameGrid";

const GameGenre = () => {
  const { genre } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box py={{ base: 6, md: 12 }}>
      <GameGrid genre={genre!} />
    </Box>
  );
};

export default GameGenre;
