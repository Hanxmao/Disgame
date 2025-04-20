import React from 'react'
import EventBanner from '../components/EventBanner'
import { Box } from '@chakra-ui/react'

const EventPage = () => {
  return (
    <Box  maxW={"1400px"} mx={"auto"}>
      <EventBanner />
    </Box>
  )
}

export default EventPage
