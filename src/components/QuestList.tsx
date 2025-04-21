import { Box, Image, Progress, Skeleton, Text, VStack } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface Quest {
  id: string;
  title: string;
  description: string;
  goal: number;
  progress: number;
  rewardTickets: number;
  completed: boolean;
  eventDate: string;
  backgroundImage: string;
}

export const mockQuests: Quest[] = [
  {
    id: "q1",
    title: "Defeat 10 Goblins",
    description: "Slay goblins in the forest region to protect the villagers.",
    goal: 10,
    progress: 4,
    rewardTickets: 2,
    completed: false,
    eventDate: "2024-06-07",
    backgroundImage:
      "https://images.unsplash.com/photo-1659640913169-31d1e0fbfe1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emVsZGF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "q2",
    title: "Collect 5 Healing Herbs",
    description: "Gather herbs from the mountain trail for the healer.",
    goal: 5,
    progress: 5,
    rewardTickets: 3,
    completed: true,
    eventDate: "2024-06-07",
    backgroundImage:
      "https://images.unsplash.com/photo-1622947163927-da3d8ab2185b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbGluZyUyMGdhbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "q3",
    title: "Complete 1 Dungeon",
    description: "Finish any dungeon without dying.",
    goal: 1,
    progress: 0,
    rewardTickets: 5,
    completed: false,
    eventDate: "2024-06-07",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1695781234175-4caa257e0cf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVuZ2VvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "q4",
    title: "Login Streak (3 Days)",
    description: "Log in daily for 3 days during the event.",
    goal: 3,
    progress: 2,
    rewardTickets: 1,
    completed: false,
    eventDate: "2024-06-07",
    backgroundImage:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "q5",
    title: "Defeat 10 Goblins",
    description: "Slay goblins in the forest region to protect the villagers.",
    goal: 10,
    progress: 4,
    rewardTickets: 2,
    completed: false,
    eventDate: "2024-06-07",
    backgroundImage:
      "https://images.unsplash.com/photo-1659640913169-31d1e0fbfe1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emVsZGF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "q6",
    title: "Collect 5 Healing Herbs",
    description: "Gather herbs from the mountain trail for the healer.",
    goal: 5,
    progress: 5,
    rewardTickets: 3,
    completed: true,
    eventDate: "2024-06-07",
    backgroundImage:
      "https://images.unsplash.com/photo-1622947163927-da3d8ab2185b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbGluZyUyMGdhbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "q7",
    title: "Complete 1 Dungeon",
    description: "Finish any dungeon without dying.",
    goal: 1,
    progress: 0,
    rewardTickets: 5,
    completed: false,
    eventDate: "2024-06-07",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1695781234175-4caa257e0cf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVuZ2VvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "q8",
    title: "Login Streak (3 Days)",
    description: "Log in daily for 3 days during the event.",
    goal: 3,
    progress: 2,
    rewardTickets: 1,
    completed: false,
    eventDate: "2024-06-07",
    backgroundImage:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWV8ZW58MHx8MHx8fDA%3D",
  },
];

export default function QuestList() {
  const isLoading = false;
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
          {mockQuests?.map((quest, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
              >
                <Image
                  src={quest.backgroundImage}
                  alt={quest.title}
                  objectFit="cover"
                  height="200px"
                  width="100%"
                />

                <Box bg="gray.900">
                  <Progress
                    value={(quest.progress / quest.goal) * 100}
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
                  <Progress hasStripe value={64} />
                  <Text fontSize="lg" noOfLines={1}>
                    {quest.title}
                  </Text>
                  <Text fontSize="sm" noOfLines={2} h={"50px"}>
                    {quest.description}
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
