import React from 'react'
import EventBanner from '../components/EventBanner'
import { Box, Spinner } from '@chakra-ui/react'
import Raffle from '../components/Raffle'
import QuestList from '../components/QuestList'
import Leaderboard from '../components/LeaderBoard'
import useActiveEvent from '../hooks/useActiveEvent'
import useLeaderboard from '../hooks/useLeaderboard'
import useTop3 from '../hooks/useTop3'

const EventPage = () => {
  const { data: event, isLoading } = useActiveEvent();
  
  if (isLoading || !event) return <Spinner />;
  const { data: top3Data } = useTop3(event?._id);
  const { data: leaderboardData } = useLeaderboard(event?._id);

  return (
    <Box  maxW={"1400px"} mx={"auto"}>
      <EventBanner />
      <Raffle />
      <QuestList />
      <Leaderboard />
    </Box>
  )
}

export default EventPage
