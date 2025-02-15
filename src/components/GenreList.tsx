import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data} = useGenres();

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} py={2}>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)}></Image>
                <Text fontSize='lg'>{g.name}</Text>
            </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
