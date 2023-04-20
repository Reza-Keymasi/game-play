import useGenre, { Genre } from "../hooks/useGenre";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre:Genre) => void
}

const GenreList = ({onSelectGenre}:Props) => {
  const { data, isLoading, error } = useGenre();

  if(error) return null

  if(isLoading) return <Spinner />
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
