import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

type Props = {
    onSelectGenre: (genre:Genre)=>void
    selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}:Props) => {
  const { data, isLoading, error } = useGenres();

    if(error) return null
    if(isLoading) return <Spinner />

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} py={1}>
            <HStack cursor={'pointer'} onClick={()=>{onSelectGenre(g)}} borderRadius={10} backgroundColor={g.id === selectedGenre?.id? 'green.500': ''}>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(g.image_background)}></Image>
                <Button fontWeight={g.id === selectedGenre?.id? 'bold': 'normal'}  variant='link' fontSize='md'>{g.name}</Button>
            </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
