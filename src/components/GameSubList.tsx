import { Center, Divider, HStack, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import VStackGameList from "./VStackGameList";

type Props = {
  genre: string;
};

const GameSubList = ({ genre }: Props) => {
  const { data: freeGames } = useGames(
    undefined,
    5,
    undefined,
    genre,
    `free-to-play`
  );
  const { data: steamGames } = useGames(
    undefined,
    5,
    undefined,
    genre,
    `steam-cloud`
  );
  const { data: teamGames } = useGames(
    undefined,
    5,
    undefined,
    genre,
    `team-based`
  );

  return (
    <SimpleGrid
      // wrap="wrap"
      gap={4}
      px={4}
      columns={{ base: 1, sm: 3 }}
      height={"100%"}
    >
      {freeGames && (
        <VStackGameList games={freeGames?.results} title="Free to Play" />
      )}
      <HStack>
        <Center height={{base:0, md:"80%"}}>
          <Divider orientation="vertical" borderWidth={1} />
        </Center>
        {steamGames && (
          <VStackGameList games={steamGames?.results} title="Steam Cloud" />
        )}
        <Center height={{base:0, md:"80%"}} >
          <Divider orientation="vertical" borderWidth={1}/>
        </Center>
      </HStack>
      {teamGames && (
        <VStackGameList games={teamGames?.results} title="Team-based" />
      )}
    </SimpleGrid>
  );
};

export default GameSubList;
