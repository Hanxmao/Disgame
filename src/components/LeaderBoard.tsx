import {
    Avatar,
    Box,
    Button,
    Heading,
    HStack,
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

interface UserEntry {
  id: string;
  name: string;
  avatar: string;
  tickets: number;
}

const currentUserId = "u5";

const mockLeaderboard: UserEntry[] = Array.from({ length: 27 }, (_, i) => ({
  id: `u${i + 1}`,
  name: `Player ${i + 1}`,
  avatar: `/mock/avatars/avatar${(i % 8) + 1}.png`,
  tickets: Math.floor(Math.random() * 1000),
})).sort((a, b) => b.tickets - a.tickets);

mockLeaderboard[4].id = currentUserId; // Inject current user in top 5
mockLeaderboard[4].name = "YOU";

export default function Leaderboard() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(mockLeaderboard.length / itemsPerPage);
  const start = page * itemsPerPage;
  const current = mockLeaderboard.slice(start, start + itemsPerPage);

  const highlightBg = useColorModeValue("purple.50", "purple.900");

  return (
    <Box mx="auto" py={10}>
      <VStack spacing={4} align="start">
        <HStack w={"full"} justifyContent={"space-between"}>
          <Heading size="lg">Spring Ticket Challenge</Heading>
          <Text fontWeight={"bold"} color="yellow.500">Ends June 7, 2024</Text>
        </HStack>

        <HStack spacing={4}>
          <Button
            onClick={() => setPage((prev) => Math.max(0, prev - 1))}
            isDisabled={page === 0}
            size="sm"
          >
            Prev
          </Button>
          <Text fontSize="sm">
            Page {page + 1} of {totalPages}
          </Text>
          <Button
            onClick={() =>
              setPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            isDisabled={page >= totalPages - 1}
            size="sm"
          >
            Next
          </Button>
        </HStack>

        <Box w="full"  borderRadius="lg" boxShadow="md">
          <Table variant="simple">
            <Thead>
              <Tr >
                <Th>Rank</Th>
                <Th>User</Th>
                <Th isNumeric>Tickets</Th>
              </Tr>
            </Thead>
            <Tbody>
              {current.map((user, index) => {
                const globalRank = start + index + 1;
                const isCurrentUser = user.id === currentUserId;
                return (
                  <Tr
                    key={user.id}
                    bg={isCurrentUser ? highlightBg : undefined}
                    transition="all 0.2s"
                    
                  >
                    <Td fontWeight="bold">#{globalRank}</Td>
                    <Td>
                      <HStack>
                        <Avatar size="sm" name={user.name} src={user.avatar} />
                        <Text>{isCurrentUser ? "YOU" : user.name}</Text>
                      </HStack>
                    </Td>
                    <Td isNumeric>{user.tickets}</Td>
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
