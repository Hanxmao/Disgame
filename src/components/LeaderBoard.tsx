import {
    Avatar,
    Box,
    Button,
    Heading,
    HStack,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Event } from "../services/eventService";
import { useUserStore } from "../stores/userStore";
import useLeaderboard from "../hooks/useLeaderboard";


type Props = {
  event: Event;
  loadingEvent: boolean;
};

export default function Leaderboard({ event, loadingEvent }: Props) {
  const { user } = useUserStore();
  const [page, setPage] = useState(1);
  const limit = 10;

  const {
    data: leaderboard,
    isLoading: loadingLeaderboard,
  } = useLeaderboard(event?._id, page, limit);

  const highlightBg = useColorModeValue("purple.50", "purple.900");

  if (loadingEvent || loadingLeaderboard) return <Spinner />;

  return (
    <Box mx="auto" py={10}>
      <VStack spacing={4} align="start">
        <HStack w={"full"} justifyContent={"space-between"}>
          <Heading size="lg">{event?.title || "Event Leaderboard"}</Heading>
          <Text fontWeight={"bold"} color="yellow.500">
            Ends {new Date(event?.endDate || "").toLocaleDateString()}
          </Text>
        </HStack>

        <HStack spacing={4}>
          <Button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            isDisabled={page === 1}
            size="sm"
          >
            Prev
          </Button>
          <Text fontSize="sm">
            Page {page} of {Math.ceil((leaderboard?.total || 1) / limit)}
          </Text>
          <Button
            onClick={() =>
              setPage((prev) =>
                Math.min(Math.ceil((leaderboard?.total || 1) / limit), prev + 1)
              )
            }
            isDisabled={page >= Math.ceil((leaderboard?.total || 1) / limit)}
            size="sm"
          >
            Next
          </Button>
        </HStack>

        <Box w="full" borderRadius="lg" boxShadow="md">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>User</Th>
                <Th isNumeric>Tickets</Th>
              </Tr>
            </Thead>
            <Tbody>
              {leaderboard?.data?.map((userEntry, index) => {
                const globalRank = (page - 1) * limit + index + 1;
                const isCurrentUser = userEntry.userId === user?._id;
                return (
                  <Tr
                    key={userEntry.userId}
                    bg={isCurrentUser ? highlightBg : undefined}
                    transition="all 0.2s"
                  >
                    <Td fontWeight="bold">#{globalRank}</Td>
                    <Td>
                      <HStack>
                        <Avatar size="sm" name={userEntry.username} src={userEntry.avatarUrl} />
                        <Text>{isCurrentUser ? "YOU" : userEntry.username}</Text>
                      </HStack>
                    </Td>
                    <Td isNumeric>{userEntry.tickets}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
}

