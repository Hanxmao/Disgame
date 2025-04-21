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
} from "@chakra-ui/react";
import avatar1 from "../assets/avatar/avatar1.jpeg";
import avatar2 from "../assets/avatar/avatar2.jpeg";
import avatar3 from "../assets/avatar/avatar3.jpeg";

const leaderboard = [
  { name: "Bob", score: 1000, avatar: avatar1 },
  { name: "Alice", score: 1200, avatar: avatar2 },
  { name: "Charlie", score: 800, avatar: avatar3 },
];

const EventBanner = () => {
  const bg = useColorModeValue("gray.50", "gray.700");
  const primary = useColorModeValue("teal.500", "teal.300");

  const podiumHeights = [150, 205, 125]; // 2nd, 1st, 3rd

  return (
    <Flex gap={6} p={6} wrap="wrap" justify="center" mb={"50px"}>
      {/* Event Banner */}
      <Box
      style={{boxShadow: "0px  20px 100px purple"}}
        w={["100%", "100%", "60%"]}
        h="400px"
        bgImage="url('https://images.unsplash.com/photo-1555532686-d0fccaccadcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        bgSize="cover"
        bgPos="center"
        borderRadius="xl"
        boxShadow="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="white" fontSize={["2xl", "3xl", "4xl"]}>
          Spring Race Master
        </Heading>
      </Box>

      {/* Leaderboard Podium */}
      <Card
      style={{boxShadow: "0px  20px 100px purple"}}
        w={["100%", "100%", "35%"]}
        h="400px"
        borderRadius="xl"
        boxShadow="md"
        maxW={"500px"}
      >
        <CardBody>
          <Heading size="lg" mb={4}>
            Top 3 Players
          </Heading>
          <HStack justify="center" align="end" spacing={6} h="300px">
            {/* 2nd */}
            <VStack spacing={0}>
              <Avatar
                size="md"
                src={leaderboard[0].avatar}
                name={leaderboard[0].name}
              />
              <Text fontWeight="bold" fontSize="md">
                {leaderboard[0].name}
              </Text>
              <Text fontSize="md">{leaderboard[0].score}</Text>
              <Box
                w={{base:"50px",md:"80px"}}
                h={`${podiumHeights[0]}px`}
                bg="silver"
                borderRadius="md"
              />
            </VStack>
            {/* 1st */}
            <VStack spacing={0}>
              <Avatar
                size="md"
                src={leaderboard[1].avatar}
                name={leaderboard[1].name}
              />
              <Text fontWeight="bold" fontSize="md">
                {leaderboard[1].name}
              </Text>
              <Text fontSize="md">{leaderboard[1].score}</Text>
              <Box
                w={{base:"50px",md:"80px"}}
                h={`${podiumHeights[1]}px`}
                bg={primary}
                borderRadius="md"
              />
            </VStack>
            {/* 3rd */}
            <VStack spacing={0}>
              <Avatar
                size="md"
                src={leaderboard[2].avatar}
                name={leaderboard[2].name}
              />
              <Text fontWeight="bold" fontSize="md">
                {leaderboard[2].name}
              </Text>
              <Text fontSize="md">{leaderboard[2].score}</Text>
              <Box
                w={{base:"50px",md:"80px"}}
                h={`${podiumHeights[2]}px`}
                bg="orange.400"
                borderRadius="md"
              />
            </VStack>
          </HStack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default EventBanner;
