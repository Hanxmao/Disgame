import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

type Props = {
    onSelectPlatform: (platform:Platform)=>void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}:Props) => {
    const {data, error} = usePlatforms()

    if (error) return null

  return (
    <Menu>
        <MenuButton my={2} as={Button} rightIcon={<FaChevronDown />}>
            {selectedPlatform? selectedPlatform.name:"Platform"}
        </MenuButton>
        <MenuList>
            {data.map(p=> <MenuItem onClick={()=>onSelectPlatform(p)} key={p.id}>{p.slug}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector
