import React from 'react'
import EventBanner from '../components/EventBanner'
import { Box } from '@chakra-ui/react'
import Raffle from '../components/Raffle'

const EventPage = () => {
  return (
    <Box  maxW={"1400px"} mx={"auto"}>
      <EventBanner />
      <Raffle />
    </Box>
  )
}

export default EventPage
