import {
  Box,
  Image,
  Progress,
  Skeleton,
  Text,
  VStack
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useQuestProgress from "../hooks/useQuestProgress";
import { Event } from "../services/eventService";

type Props = {
  event: Event
  loadingEvent: boolean
}

export default function QuestList({event,loadingEvent}:Props) {
  const {
    data: quests,
    isLoading: loadingQuests,
  } = useQuestProgress(event?._id);

  const isLoading = loadingEvent || loadingQuests;

  return (
    <Box maxW="1400px" mx="auto">
      {isLoading ? (
        <Skeleton height={200} />
      ) : (
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
          {quests?.map((quest, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
              >
                <Image
                  src={quest.questId.backgroundImage}
                  alt={quest.questId.title}
                  objectFit="cover"
                  height="200px"
                  width="100%"
                />

                <Box bg="gray.900">
                  <Progress
                    value={(quest.progress / quest.questId.goal) * 100}
                    size="xs"
                    colorScheme={quest.completed ? "green" : "yellow"}
                  />
                </Box>

                <VStack
                  spacing={1}
                  align="start"
                  py={2}
                  px={5}
                  bg="purple.900"
                  color="white"
                >
                  <Text fontSize="lg" noOfLines={1}>
                    {quest.questId.title}
                  </Text>
                  <Text fontSize="sm" noOfLines={2} h={"50px"}>
                    {quest.questId.description}
                  </Text>
                </VStack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}
