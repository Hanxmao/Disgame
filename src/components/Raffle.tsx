import { useState } from 'react';
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
  Select
} from '@chakra-ui/react';
import Countdown from './CountDown';
import ConfettiBurst from './ConfettiBurst';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface Product {
  id: string;
  title: string;
  imageUrl: string;
}

interface Prize {
  rank: number;
  product_id: string;
  quantity: number;
}

interface Winner {
  ticket_id: string;
  user: User;
  prize: Prize;
  product: Product;
}

const mockDataByDate: Record<string, Winner[]> = {
  '2024-06-05': [
    {
      ticket_id: 't1',
      user: { id: 'u1', name: 'Alice', avatar: '/mock/avatars/avatar1.png' },
      prize: { rank: 1, product_id: 'p1', quantity: 10 },
      product: { id: 'p1', title: 'Gold Trophy', imageUrl: '/mock/prizes/gold.png' }
    },
    {
      ticket_id: 't2',
      user: { id: 'u2', name: 'Bob', avatar: '/mock/avatars/avatar2.png' },
      prize: { rank: 2, product_id: 'p1', quantity: 5 },
      product: { id: 'p1', title: 'Gold Trophy', imageUrl: '/mock/prizes/gold.png' }
    }
  ],
  '2024-06-06': [
    {
      ticket_id: 't3',
      user: { id: 'u3', name: 'Charlie', avatar: '/mock/avatars/avatar3.png' },
      prize: { rank: 1, product_id: 'p2', quantity: 7 },
      product: { id: 'p2', title: 'Silver Sword', imageUrl: '/mock/prizes/silver.png' }
    },
    {
      ticket_id: 't4',
      user: { id: 'u1', name: 'Alice', avatar: '/mock/avatars/avatar1.png' },
      prize: { rank: 2, product_id: 'p2', quantity: 3 },
      product: { id: 'p2', title: 'Silver Sword', imageUrl: '/mock/prizes/silver.png' }
    }
  ]
};

const allPrizePool: Product[] = [
  { id: 'p1', title: 'Gold Trophy', imageUrl: '/mock/prizes/gold.png' },
  { id: 'p2', title: 'Silver Sword', imageUrl: '/mock/prizes/silver.png' }
];

export default function Raffle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isPrizeOpen,
    onOpen: onPrizeOpen,
    onClose: onPrizeClose
  } = useDisclosure();

  const [selectedDate, setSelectedDate] = useState<string>('2024-06-06');
  const winners = mockDataByDate[selectedDate] || [];

  return (
    <Box py={10} px={6}>
      <HStack spacing={6} align="start" justifyContent={"space-between"}>
        <HStack gap={5}>
        <Heading size="lg" bgGradient="linear(to-r, #7928CA, #FF0080)"  bgClip="text">Raffle</Heading>
        <Button  onClick={onOpen} colorScheme="teal">
         Daily Winners
        </Button>
        <Button colorScheme="gray" variant="outline" onClick={onPrizeOpen}>
                See Prizes
              </Button>
        </HStack>
        <Countdown target={new Date(Date.now() + 3600000).toISOString()} />
       
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ConfettiBurst />
        <ModalContent>
          <ModalHeader>🎉 Previous Winners</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
            <Select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} mb={4}>
              {Object.keys(mockDataByDate).map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </Select>
            <VStack spacing={4} py={2} align="start">
              {winners.map(({ user, product, prize }) => (
                <HStack
                  key={prize.rank + user.id}
                  w="full"
                  p={3}
                  bg="gray.50"
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
                    <Image boxSize="36px" src={product.imageUrl} alt={product.title} borderRadius="md" />
                    <Text>{product.title} ×{prize.quantity}</Text>
                  </HStack>
                </HStack>
              ))}
              
            </VStack>
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
              {allPrizePool.map((p) => (
                <HStack key={p.id} w="full" p={3} bg="gray.50" borderRadius="md" justify="space-between">
                  <HStack>
                    <Image boxSize="36px" src={p.imageUrl} alt={p.title} borderRadius="md" />
                    <Text>{p.title}</Text>
                  </HStack>
                </HStack>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}