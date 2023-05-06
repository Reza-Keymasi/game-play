import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const {data:platforms} = usePlatforms();
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId)
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Game`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
