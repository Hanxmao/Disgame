import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import Collapse from "../components/Collapse";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error
  return (
    <>
      <Heading>{game.name}</Heading>
      <Collapse content={game.description_raw} />
    </>
  )
};

export default GameDetailPage;
