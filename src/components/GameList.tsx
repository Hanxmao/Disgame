import {
  Box,
  Text,
  Image,
  Button,
  VStack,
  TagCloseButton,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useGames from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
import GameSubList from "./GameSubList";

type Props = {
  tagName: string;
  genre: string;
};

export default function GameList({ tagName, genre}: Props) {
  const { data: games } = useGames(undefined, 10, undefined, genre);

  return (
    <>
      <Box p={4} maxW="1400px" mx="auto">
        <Text fontSize="2xl" mb={4} fontWeight="bold">
          Top Rated {tagName}
        </Text>

        <Swiper
          slidesPerView={2.2}
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {games?.results?.map((game, index) => (
            <SwiperSlide key={index}>
              <Link to={`/games/${game.slug}`}>
                <Box
                  position="relative"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="md"
                >
                  <Image
                    src={getCroppedImageUrl(game.background_image)}
                    alt={game.name}
                    objectFit="cover"
                    height="200px"
                    width="100%"
                  />

                  {/* Game Title */}
                  <VStack
                    spacing={1}
                    align="start"
                    p={2}
                    bg="gray.900"
                    color="white"
                  >
                    <Text fontSize="sm" noOfLines={2}>
                      {game.name}
                    </Text>
                  </VStack>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <GameSubList genre={genre} />
      </Box>
    </>
  );
}
