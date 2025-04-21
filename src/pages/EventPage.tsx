import React from 'react'
import EventBanner from '../components/EventBanner'
import { Box } from '@chakra-ui/react'
import Raffle from '../components/Raffle'
import QuestList from '../components/QuestList'

const EventPage = () => {
  return (
    <Box  maxW={"1400px"} mx={"auto"}>
      <EventBanner />
      <Raffle />
      <QuestList />
    </Box>
  )
}

export default EventPage
