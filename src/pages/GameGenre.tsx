import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router'
import GameGrid from '../components/GameGrid'

const GameGenre = () => {
    const {genre} = useParams()
  return (
    <Box py={{base:6, md:12}}>
        <GameGrid genre={genre!}/>
    </Box>
  )
}

export default GameGenre
