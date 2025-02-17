import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

type Props = {
    onSelectGenre: (genre:Genre)=>void
}

const GenreList = ({onSelectGenre}:Props) => {
  const { data, isLoading, error } = useGenres();

    if(error) return null
    if(isLoading) return <Spinner />

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} py={1}>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)}></Image>
                <Button onClick={()=>{onSelectGenre(g)}} variant='link' fontSize='md'>{g.name}</Button>
            </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
