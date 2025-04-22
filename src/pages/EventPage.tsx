import { Box } from '@chakra-ui/react'
import EventBanner from '../components/EventBanner'
import Leaderboard from '../components/LeaderBoard'
import QuestList from '../components/QuestList'
import Raffle from '../components/Raffle'
import useActiveEvent from '../hooks/useActiveEvent'

const EventPage = () => {
  const { data: event, isLoading: loadingEvent } = useActiveEvent();
  if(!event) return null
  return (
    <Box  maxW={"1400px"} mx={"auto"}>
      <EventBanner event={event} loadingEvent={loadingEvent} />
      <Raffle />
      <QuestList />
      <Leaderboard />
    </Box>
  )
}

export default EventPage
