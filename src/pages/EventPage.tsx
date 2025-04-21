import React from 'react'
import EventBanner from '../components/EventBanner'
import { Box } from '@chakra-ui/react'
import Raffle from '../components/Raffle'
import QuestList from '../components/QuestList'
import Leaderboard from '../components/LeaderBoard'

const EventPage = () => {
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
