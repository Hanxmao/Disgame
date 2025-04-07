import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/gameQueryStore";

const GenreList = () => {
  const { update, gameQuery } = useGameQueryStore();
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading as="h2" fontSize="xl" my={4}>
        Genres
      </Heading>
      <List>
        {data?.results.map((g) => (
          <ListItem key={g.id} py={1}>
            <HStack
              cursor={"pointer"}
              onClick={() => {
                update({ genreId: g.id });
              }}
              borderRadius={10}
              backgroundColor={g.id === gameQuery.genreId ? "green.500" : ""}
            >
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                fontWeight={g.id === gameQuery.genreId ? "bold" : "normal"}
                variant="link"
                fontSize="md"
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
