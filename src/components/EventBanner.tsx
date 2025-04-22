import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import useTop3 from "../hooks/useTop3";
import { Event } from "../services/eventService";

type Props = {
  event: Event;
  loadingEvent: boolean;
};

const podiumHeights = [205, 150, 125]; // 1st, 2nd, 3rd

const EventBanner = ({ event, loadingEvent }: Props) => {
  const primary = useColorModeValue("teal.500", "teal.300");

  const { data: top3Data, isLoading: loadingTop3 } = useTop3(event._id);
  const leaderboard = top3Data?.data ?? [];

  if (loadingEvent || loadingTop3) return <Spinner />;

  // Build display array: sorted by position [2nd, 1st, 3rd]
  const podium = [leaderboard[1], leaderboard[0], leaderboard[2]].filter(Boolean);

  return (
    <Flex gap={6} p={6} wrap="wrap" justify="center" mb={"50px"}>
      {/* Event Banner */}
      <Box
        style={{ boxShadow: "0px 20px 100px purple" }}
        w={["100%", "100%", "60%"]}
        h="400px"
        bgImage={`url(${event.bgImage})`}
        bgSize="cover"
        bgPos="center"
        borderRadius="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="white" fontSize={["2xl", "3xl", "4xl"]}>
          {event.title}
        </Heading>
      </Box>

      {/* Leaderboard Podium */}
      <Card
        style={{ boxShadow: "0px 20px 100px purple" }}
        w={["100%", "100%", "35%"]}
        h="400px"
        borderRadius="xl"
        maxW={"500px"}
      >
        <CardBody>
          <Heading size="lg" mb={4}>
            Top Players
          </Heading>
          <HStack justify="center" align="end" spacing={6} h="300px">
            {podium.map((user, idx) => (
              <VStack spacing={0} key={user.userId}>
                <Avatar
                  size="md"
                  src={user.avatarUrl}
                  name={user.username}
                />
                <Text fontWeight="bold" fontSize="md">
                  {user.username}
                </Text>
                <Text fontSize="md">{user.tickets}</Text>
                <Box
                  w={{ base: "50px", md: "80px" }}
                  h={`${podiumHeights[idx]}px`}
                  bg={
                    idx === 0
                      ? primary
                      : idx === 1
                      ? "silver"
                      : "orange.400"
                  }
                  borderRadius="md"
                />
              </VStack>
            ))}
            {podium.length === 0 && (
              <Text fontStyle="italic" color="gray.500">
                No players yet
              </Text>
            )}
          </HStack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default EventBanner;
