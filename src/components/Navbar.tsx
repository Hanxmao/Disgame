import { HStack, Text } from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa6";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" paddingInline='10px' >
      <HStack>
        <FaGamepad size={50} />
        <Text fontSize={22} fontWeight={'bold'}>DisGame</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
