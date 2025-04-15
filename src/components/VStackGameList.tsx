import { Badge, Box, Heading, HStack, Image, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { Game } from '../entites'

type Props = {
    games: Game[]
    title: string
}

const VStackGameList = ({games, title}:Props) => {
    const imageSize = useBreakpointValue({ base: "50px", md: "70px", lg: "90px" });
  return (
    <VStack align="start" spacing={4} py={8} mx={"auto"}>
          <Heading size="md">{title}</Heading>
          {games.map((game, idx) => (
            <HStack key={idx} spacing={3} align="start" w="100%">
              <Image
                src={game.background_image}
                boxSize={imageSize}
                objectFit="cover"
                borderRadius="md"
              />
              <Box>
                <Text fontWeight="semibold" noOfLines={1} fontSize="md">
                  {game.name}
                </Text>
              </Box>
            </HStack>
          ))}
        </VStack>
  )
}

export default VStackGameList
