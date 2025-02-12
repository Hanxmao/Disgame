import { HStack, Text } from "@chakra-ui/react"
import {FaGamepad} from "react-icons/fa6"

const Navbar = () => {
  return (
    <HStack>
      <FaGamepad size={70} />
      <Text>DisGame</Text>
    </HStack>
  )
}

export default Navbar
