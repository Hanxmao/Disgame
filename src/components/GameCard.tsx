import { Game, IconPlatform } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} height='200px'/>
        <CardBody>
          <Heading fontSize={"xl"}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform as IconPlatform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
