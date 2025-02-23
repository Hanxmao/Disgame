import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { IconPlatform } from "../services/platform-service";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIcons from "./PlatformIcons";
import { Game } from "../services/game-service";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} height="200px" />
        <CardBody>
          <HStack justifyContent="space-between" mb={3}>
            <PlatformIcons
              platforms={game.parent_platforms.map(
                (p) => p.platform as IconPlatform
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"xl"}>
            <Emoji rating={game.rating_top} />
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
