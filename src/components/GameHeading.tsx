import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

type Props = {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {
    const platform = gameQuery.platform ? gameQuery.platform.name + ' ' : ''
    const genre = gameQuery.genre ? gameQuery.genre.name + ' ' : ''
  
    return (
    <Heading as='h1' my={4} fontSize={'4xl'}>
        {platform+genre}Games
    </Heading>
  )
}

export default GameHeading
