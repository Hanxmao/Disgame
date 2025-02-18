import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
    //reference: https://v2.chakra-ui.com/docs/styled-system/color-mode#changing-color-mode
    const {colorMode, toggleColorMode} = useColorMode()

  
    return (
    <HStack>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        <Text whiteSpace={'nowrap'}>
            Dark Mode
        </Text>
    </HStack>
  )
}

export default ColorModeSwitch
