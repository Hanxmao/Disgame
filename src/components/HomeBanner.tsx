import {
  Box,
  Flex,
  Image,
  Show,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useGames from "../hooks/useGames";

SwiperCore.use([Autoplay]);

const HEIGHT = "500px";

const progressAnimation = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("purple.900", "yellow.100");
  const progressColor = useColorModeValue("gray.900", "white");
  const duration = 5; // seconds

  const { data } = useGames(undefined,5)
  const games = data?.results
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      height={HEIGHT}
      width={"80vw"}
      color={textColor}
      mx={"auto"}
      gap={6}
      aspectRatio="2/1"
      py={{ base: 4, md: 16 }}
      maxW={"1200px"}
    >
      {/* Left: Main Carousel */}
      <Box
        flex="1"
        position="relative"
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: duration * 1000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop= {games&&games.length>1}
          //Why need condition here: fix warning, since games is dynamic data and it will be 0 initially, make sure the data has been fetched then loop, otherwise get warning message
        >
          {games?.map((game, idx) => (
            <SwiperSlide key={idx}>
              <Box
                height={HEIGHT}
                backgroundImage={`url(${game.background_image})`}
                backgroundSize="cover"
                backgroundPosition="center"
                position="relative"
                borderRadius={20}
              >
                <Box position="absolute" bottom="10" left="10" maxW="lg">
                  <Text fontSize="3xl" fontWeight="bold" mb="2">
                    {game.name}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "lg" }}>
                    {game.description_raw}
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Right: Thumbnails */}
      <Show>
        <VStack
          width={{ base: "0", md: "250px" }}
          spacing={4}
          justify="center"
          align="stretch"
          h={{ base: 0, md: HEIGHT }}
        >
          {games?.map((game, index) => (
            <Box key={index} position="relative">
              <Flex
                align="center"
                gap={3}
                p={2}
                borderRadius="md"
                bg={index === activeIndex ? bgColor : "transparent"}
                cursor="pointer"
              >
                <Image
                  src={game.background_image}
                  boxSize="48px"
                  borderRadius="md"
                  objectFit="cover"
                  aspectRatio={"square"}
                />
                <Text fontSize="sm" noOfLines={2} fontWeight="medium">
                  {game.name}
                </Text>
                {index === activeIndex && (
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    height="100%"
                    width="100%"
                    bg={progressColor}
                    opacity={"30%"}
                    borderLeftRadius={5}
                    animation={`${progressAnimation} ${duration}s linear`}
                  />
                )}
              </Flex>
            </Box>
          ))}
        </VStack>
      </Show>
    </Flex>
  );
};

export default HomeBanner;

