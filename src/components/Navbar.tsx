import { HStack, Show, Text } from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa6";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";



const Navbar = () => {
  return (
    <HStack justifyContent="space-between" paddingInline='10px' >
      <HStack>
        <FaGamepad size={50} />
        <Show above="md">
        <Text fontSize={22} fontWeight={'bold'}>DisGame</Text>
        </Show>
      </HStack>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
