import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelecter = () => {
    const {data, error} = usePlatforms()

    if (error) return null

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            Platform
        </MenuButton>
        <MenuList>
            {data.map(p=> <MenuItem key={p.id}>{p.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelecter
