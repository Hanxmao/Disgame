import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area={'nav'} > 
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} bg='blueviolet'> Aside</GridItem> 
      </Show>
      <GridItem area={'main'} bg='red.400'> Main</GridItem>
    </Grid>

  )
}

export default App
