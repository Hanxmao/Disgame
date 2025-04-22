// === FRONTEND ===

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Avatar,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Select,
  Spinner,
  Show,
} from "@chakra-ui/react";
import Countdown from "./Countdown";
import ConfettiBurst from "./ConfettiBurst";
import useActiveEvent from "../hooks/useActiveEvent";
import { useDrawWinners } from "../hooks/useDrawWinners";
import usePrizePool from "../hooks/usePrizePool";
import { Event } from "../services/eventService";

type Props = {
  event: Event
  loadingEvent: boolean
}

export default function Raffle({event,loadingEvent}:Props) {
  const { data: prizePool } = usePrizePool(event?._id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isPrizeOpen,
    onOpen: onPrizeOpen,
    onClose: onPrizeClose,
  } = useDisclosure();

  const { data, isLoading: loadingDraws } = useDrawWinners(event?._id);
  const draws = data?.draws || [];
  const [selectedDrawId, setSelectedDrawId] = useState<string | undefined>();

  console.log("data", data);

  const selectedDraw = draws.find((d) => d.drawId === selectedDrawId);
  const winners = selectedDraw?.winners || [];

  return (
    <Box py={10}>
      <HStack spacing={6} align="start" justifyContent="space-between">
        <HStack gap={5}>
          <Heading
            size="lg"
            bgGradient="linear(to-r, #7928CA, #FF0080)"
            bgClip="text"
          >
            Raffle
          </Heading>
          <HStack gap={5}>
  {/* Text buttons on md+ */}
  <Show above="md">
    <Button onClick={onOpen} colorScheme="teal">
      Daily Winners
    </Button>
    <Button colorScheme="gray" variant="outline" onClick={onPrizeOpen}>
      See Prizes
    </Button>
  </Show>

  {/* Icon buttons below md */}
  <Show below="md">
    <Button onClick={onOpen} colorScheme="teal" p={2}>
    🏆
    </Button>
    <Button onClick={onPrizeOpen} colorScheme="gray" variant="outline" p={2}>
    👑
    </Button>
  </Show>
</HStack>
        </HStack>
        <Countdown target={new Date(Date.now() + 3600000).toISOString()} />
      </HStack>
      <Text fontSize="lg" mt={4}>
        Complete quests to win raffle tickets!
      </Text>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ConfettiBurst />
        <ModalContent>
          <ModalHeader>🎉 Previous Winners</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loadingDraws ? (
              <Spinner />
            ) : (
              <>
                <Select
                  value={selectedDrawId}
                  onChange={(e) => setSelectedDrawId(e.target.value)}
                  mb={4}
                >
                  {draws.map((draw) => (
                    <option key={draw.drawId} value={draw.drawId}>
                      {`${draw.drawOrder}${getOrdinalSuffix(
                        draw.drawOrder
                      )} Draw`}
                    </option>
                  ))}
                </Select>
                <VStack spacing={4} py={2} align="start">
                  {winners.map(({ user, product, prize, ticket_id }) => (
                    <HStack
                      key={ticket_id}
                      w="full"
                      borderRadius="md"
                      boxShadow="sm"
                      justify="space-between"
                    >
                      <HStack>
                        <Avatar src={user.avatar} name={user.name} size="sm" />
                        <Text>{user.name}</Text>
                      </HStack>
                      <Text fontWeight="bold">#{prize.rank}</Text>
                      <HStack>
                        <Image
                          boxSize="36px"
                          src={product.imageUrl}
                          alt={product.title}
                          borderRadius="md"
                        />
                        <Text>
                          {product.title} ×{prize.quantity}
                        </Text>
                      </HStack>
                    </HStack>
                  ))}
                </VStack>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isPrizeOpen} onClose={onPrizeClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>🏆 Prize Pool</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} py={2}>
              {prizePool?.map((p) => (
                <HStack
                  key={`${p.rank}-${p.product.id}`}
                  w="full"
                  borderRadius="md"
                  justify="space-between"
                >
                  <Text w={"60px"}>Rank {p.rank}</Text>
                  <HStack>
                    <Image
                      boxSize="36px"
                      src={p.product.imageUrl}
                      alt={p.product.title}
                      borderRadius="md"
                    />
                    <Text>{p.product.title}</Text>
                  </HStack>
                  
                  <Text>×{p.quantity}</Text>
                </HStack>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

function getOrdinalSuffix(n: number): string {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
